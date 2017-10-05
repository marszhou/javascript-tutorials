function generate_todo(selector) {
  const URL = './todos.php'

  const todoStore = {
    visibilityFilter: 'SHOW_ALL',
    getVisibleTodos(todos) {
      switch(this.visibilityFilter) {
        case 'SHOW_ALL':
          return todos
        case 'SHOW_ACTIVE':
          return todos.filter(todo => !todo.completed)
        case 'SHOW_COMPLETED':
          return todos.filter(todo => todo.completed)
        default:
          throw new Error('未知filter值: ' + filter)
      }
    },
    getTodos(callback) {
      this.setLoading(true)
      callback()
      $.ajax(URL, {
        success: (todos) => {
          this.setLoading(false)
          callback(todos)
          this.latest = todos
        }
      })
    },
    addTodo(text, callback) {
      const todo = {
        id: this.nextTodoId(),
        text: text,
        completed: false // 新添加的todo，completed值是false
      }
      $.ajax(URL,{
        data: JSON.stringify(todo),
        processData: true,
        method: 'post',
        contentType: 'application/json',
        success: (todos) => {
          callback(todos)
          this.latest = todos
        }
      })
    },
    deleteTodo(id, callback) {
      $.ajax(URL + '?todoId=' + id, {
        method: 'delete',
        success: (todos) => {
          callback(todos)
          this.latest = todos
        }
      })
    },
    toggleTodo(id, callback) {
      $.ajax(URL + '?todoId=' + id, {
        method: 'put',
        success: (todos) => {
          callback(todos)
          this.latest = todos
        }
      })
    },
    updateTodo(id, text, callback) {
      $.ajax(URL + '?todoId=' + id, {
        method: 'patch',
        data: JSON.stringify({text: text}),
        processData: true,
        contentType: 'application/json',
        success: (todos) => {
          this.setCurrent(null)
          callback(todos)
          this.latest = todos
        }
      })
    },
    setVisibilityFilter(filter) {
      this.visibilityFilter = filter
    },
    nextTodoId() {
      return Math.random().toString(36).substr(2)
    },
    loading: false,
    setLoading(loading) {
      this.loading = loading
    },
    current: '',
    setCurrent(current) {
      this.current = current
    }
  }

  const todoApp = {
    // 初始化，插入UI
    init() {
      const html = `
        <form>
          <input type='text' name='todoText' autocomplete='off'/>
          <button>添加</button>
        </form>

        <img src='../giphy.gif' class='loading' style='display:none'/>

        <ul class='list'>
        </ul>

        <p>
          查看：

          <span class='filter-link current' filter-value='SHOW_ALL'>
            <span class='active'>全部</span>
            <a class='not-active' href='#'>全部</a>
          </span>,

          <span class='filter-link' filter-value='SHOW_ACTIVE'>
            <span class='active'>未完成</span>
            <a class='not-active' href='#'>未完成</a>
          </span>,

          <span class='filter-link' filter-value='SHOW_COMPLETED'>
            <span class='active'>已完成</span>
            <a class='not-active' href='#'>已完成</a>
          </span>

        </p>
      `
      element.innerHTML = html
      this._bindHanlders()

      this.render = this.render.bind(this)
      todoStore.getTodos(this.render)
    },
    // 绑定事件
    _bindHanlders() {
      this.loading = element.querySelector('.loading')
      this.form = element.querySelector('form')
      this.form.addEventListener('submit', this.onSubmit.bind(this))

      this.filterLinks = element.querySelectorAll('.filter-link')
      this.filterLinks.forEach((filterLink) => {
        filterLink.addEventListener('click', this.onFilterLinkClick.bind(this, filterLink))
      })

      this.list = element.querySelector('.list')
      // this.list.addEventListener('click', this.onTodoItemClick.bind(this))
    },

    render(todos) {
      this.renderTodoList(todos)
      this.renderFooter()
    },

    renderTodoList(todos) {
      if (todoStore.loading) {
        this.loading.style.display = ''
        this.list.style.display = 'none'
      } else {
        this.loading.style.display = 'none'
        this.list.style.display = ''
      }

      if (!todos) return

      const visibleTodos = todoStore.getVisibleTodos(todos)
      let content = visibleTodos.map(todo => `
        <li todo-id='${todo.id}'>
          ${
            todo.id === todoStore.current ?
              `<input type='text' value='${todo.text}'/>` :
              `
                <label>
                  <input type='checkbox' value='${todo.id}' ${ todo.completed ? 'checked' : ''}/>
                  <span style='text-decoration: ${ todo.completed ? 'line-through' : 'none'}'>${todo.text}</span>
                </label>
                <button style='float:right' class='delete'>
                  删除
                </button>
                <button style='float:right' class='edit'>
                  修改
                </button>
              `
          }
        </li>
      `).join('')
      this.list.innerHTML = content

      this.list.querySelectorAll('input[type="checkbox"]').forEach(el => el.addEventListener('click', this.onTodoItemClick.bind(this)))
      this.list.querySelectorAll('li').forEach((li) => {
        const id = li.getAttribute('todo-id')
        li.querySelector('.delete') && li.querySelector('.delete').addEventListener('click', this.onTodoDeleteClick.bind(this, id))
        li.querySelector('.edit') && li.querySelector('.edit').addEventListener('click', this.onTodoEditClick.bind(this, id))
      })

      if (todoStore.current) {
        const textInput = this.list.querySelector('input[type="text"]')
        textInput.select()

        textInput.addEventListener('blur', this.onTodoEditCancel.bind(this))
        textInput.addEventListener('keyup', this.onTodoEditKeyPress.bind(this))
      }

    },
    renderFooter() {
      this.filterLinks.forEach( filterLink => filterLink.classList.remove('current') )
      const currentFilterLink = element.querySelector(`[filter-value=${todoStore.visibilityFilter}]`)
      currentFilterLink.classList.add('current')
    },

    onSubmit(e) {
      e.preventDefault()

      let text = this.form.todoText.value.trim()
      if (text.length > 0) {
        todoStore.addTodo(htmlEncode(text), this.render)
      }
      this.form.todoText.value = ''
    },
    onTodoEditKeyPress(e) {
      switch(e.key) {
        case 'Enter':
          const text = e.target.value.trim()
          if (text.length >0) {
            todoStore.updateTodo(todoStore.current, text, this.render)
          }
          break;
        case 'Escape':
          this.onTodoEditCancel()
          break;
        default:
          break;
      }
    },
    onTodoEditCancel() {
      todoStore.setCurrent(null)
      this.render(todoStore.latest)
    },
    onTodoItemClick(e) {
      e.preventDefault()
      let id = e.target.value
      todoStore.toggleTodo(id, this.render)
    },
    onTodoDeleteClick(id, e) {
      if (window.confirm('是否要删除本条todo?')) {
        todoStore.deleteTodo(id, this.render)
      }
    },
    onTodoEditClick(id, e) {
      todoStore.setCurrent(id)
      this.render(todoStore.latest)
    },
    onFilterLinkClick(linkElement, e) {
      e.preventDefault()
      const filter = linkElement.getAttribute('filter-value')
      todoStore.setVisibilityFilter(filter)
      todoStore.getTodos(this.render)
    }
  }

  function htmlEncode(text) {
    const div = document.createElement('div')
    div.innerText = text
    return div.innerHTML
  }

  const element = document.querySelector(selector)
  todoApp.init()
}

// 请求示例代码
// const URL = './todos.php'

// 获取列表
// $.get(URL, (todos) => {
//   console.log(todos)
// })

// 创建
// $.ajax(URL,{
//   data: JSON.stringify({id: 'ccc1', text: 'xxx'}),
//   processData: true,
//   method: 'post',
//   contentType: 'application/json',
//   success: (todos) => {
//     console.log('post response', todos)
//   }
// });

// 切换complete状态
// $.ajax(URL + '?todoId=ccc', {
//   method: 'put',
//   success: (todos) => {
//     console.log('put response', todos)
//   }
// })

// 修改
// $.ajax(URL + '?todoId=bbb', {
//   method: 'patch',
//   data: JSON.stringify({text: 'zzz'}),
//   processData: true,
//   contentType: 'application/json',
//   success: (todos) => {
//     console.log('put response', todos)
//   }
// })

// 删除
// $.ajax(URL + '?todoId=bbb', {
//   method: 'delete',
//   success: (todos) => {
//     console.log('put response', todos)
//   }
// })
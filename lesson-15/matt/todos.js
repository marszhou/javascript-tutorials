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
          throw new Error('未知filter值: ' + this.visibilityFilter)
      }
    },
    getTodos(callback) {
      this.setLoading(true)
      callback()
      $.ajax(URL, {
        success: (todos) => {
          this.setLoading(false)
          callback(todos)
        }
      })
    },
    addTodo(text, callback) {
      $.ajax(URL,{
        data: JSON.stringify({id: this.nextTodoId(), text: text}),
        processData: true,
        type: 'post',
        contentType: 'application/json',
        success: (todos) => {
          callback(todos)
        }
      });
    },
    toggleTodo(id, callback) {
      this.setLoading(true)
      callback()

      $.ajax(URL + '?&todoId=' + id, {
        method: 'put',
        success: (todos) => {
          this.setLoading(false)
          callback(todos)
        }
      })
    },
    setVisibilityFilter(filter, callback) {
      this.visibilityFilter = filter
    },
    nextTodoId() {
      return Math.random().toString(36).substr(2)
    },
    loading: false,
    setLoading(bool) {
      this.loading = bool
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

        <img src='../giphy.gif' class='loading'/>

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

      todoStore.getTodos(this.render.bind(this))
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
      this.list.addEventListener('click', this.onTodoItemClick.bind(this))
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

      if (!todos) {
        return
      }

      const visibleTodos = todoStore.getVisibleTodos(todos)
      let content = visibleTodos.map(todo => `
        <li style='text-decoration: ${ todo.completed ? 'line-through' : 'none'}' todo-id='${todo.id}'>
          ${todo.text}
        </li>
      `).join('')
      this.list.innerHTML = content
    },
    renderFooter() {
      this.filterLinks.forEach( filterLink => filterLink.classList.remove('current') )
      const currentFilterLink = element.querySelector(`[filter-value=${todoStore.visibilityFilter}]`)
      currentFilterLink.classList.add('current')
    },
    onSubmit(e) {
      e.preventDefault()
      const value = this.form.todoText.value.trim()
      if (value.length > 0) {
        todoStore.addTodo(value, this.render.bind(this))
      }
    },
    onTodoItemClick(e) {
      if (e.target.tagName !== 'LI') return
      const li = e.target
      let id = li.getAttribute('todo-id')
      todoStore.toggleTodo(id, this.render.bind(this))
    },
    onFilterLinkClick(linkElement, e) {
      e.preventDefault()
      const filter = linkElement.getAttribute('filter-value')
      todoStore.setVisibilityFilter(filter)
      todoStore.getTodos(this.render.bind(this))
    }
  }

  const element = document.querySelector(selector)
  todoApp.init()
}

// 请求示例代码
// const url = './todos.php'

// GET
// $.get(url, (todos) => {
//   console.log(todos)
// })


// POST
// $.ajax(url,{
//   data: JSON.stringify({id: 'aaaa', text: 'xxx'}),
//   processData: true,
//   type: 'post',
//   contentType: 'application/json',
//   success: (todos) => {
//     console.log('post response', todos)
//   }
// });

// PUT
// $.ajax(url + '?&todoId=b', {
//   method: 'put',
//   success: (todos) => {
//     console.log('put response', todos)
//   }
// })
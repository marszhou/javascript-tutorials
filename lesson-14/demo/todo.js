function generate_todo(selector, storageKey) {
  const todoStore = {
    visibilityFilter: 'SHOW_ALL',
    // 工具方法
    getVisibleTodos(filter) {
      // (1)
      // your code
      // 如何根据过滤条件，返回不同的todos呢？
      const todos = this.loadTodos()
      switch(filter) {
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
    saveTodos(todos) {
      localStorage.setItem(storageKey, JSON.stringify(todos))
    },
    loadTodos() {
      let todos
      try {
        todos = JSON.parse(localStorage.getItem(storageKey))
      } catch(e) {
        console.log(e)
      }
      return todos || []
    },
    addTodo(text) {
      const todo = {
        id: this.nextTodoId(),
        text: text,
        completed: false // 新添加的todo，completed值是false
      }
      const todos = this.loadTodos()
      todos.push(todo)
      // 数据模型被更改后，要重新渲染
      this.saveTodos(todos)
    },
    toggleTodo(id) {
      const todos = this.loadTodos()
      let findIndex = todos.findIndex( todo => todo.id === id )
      if (findIndex >= 0) {
        let findTodo = todos[findIndex]
        findTodo.completed = !findTodo.completed
      }
      this.saveTodos(todos)
    },
    setVisibilityFilter(filter) {
      this.visibilityFilter = filter
    },
    nextTodoId() {
      return Math.random().toString(36).substr(2)
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
      this.render()
    },
    // 绑定事件
    _bindHanlders() {
      this.form = element.querySelector('form')
      this.form.addEventListener('submit', this.onSubmit.bind(this))

      this.filterLinks = element.querySelectorAll('.filter-link')
      this.filterLinks.forEach((filterLink) => {
        filterLink.addEventListener('click', this.onFilterLinkClick.bind(this, filterLink))
      })

      this.list = element.querySelector('.list')
      this.list.addEventListener('click', this.onTodoItemClick.bind(this))
    },
    // 更新界面
    render() {
      this.renderTodoList()
      this.renderFooter()
    },
    // 表单提交时
    onSubmit(e) {
      e.preventDefault()
      // your code
      // 应该处理什么？

      let text = this.form.todoText.value.trim()
      if (text.length > 0) {
        todoStore.addTodo(htmlEncode(text))
      }
      this.render()
      this.form.todoText.value = ''
    },
    // 过滤条件点击时
    onFilterLinkClick(linkElement, e) {
      e.preventDefault()
      // your code
      const filter = linkElement.getAttribute('filter-value')
      todoStore.setVisibilityFilter(filter)
      this.render()
    },
    onTodoItemClick(e) {
      if (e.target.tagName !== 'LI') return

      const li = e.target
      let id = li.getAttribute('todo-id')
      todoStore.toggleTodo(id)
      this.render()
    },
    renderTodoList() {
      const todos = todoStore.getVisibleTodos(todoStore.visibilityFilter)
      let content = todos.map(todo => `
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
    }
  }

  function htmlEncode(text) {
    const div = document.createElement('div')
    div.innerText = text
    return div.innerHTML
  }
  // 起点
  const element = document.querySelector(selector)
  todoApp.init()

  window.addEventListener('storage', (e) => {
    if (e.key === storageKey) {
      todoApp.render()
    }
  })
}
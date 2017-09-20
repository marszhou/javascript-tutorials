function generate_todo(selector, storageKey) {
  const todoStore = {
    visibilityFilter: 'SHOW_ALL',
    getVisibleTodos(filter) {
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
    addTodo(text) {
      const todos = this.loadTodos()
      const todo = {
        id: this.genTodoId(),
        text: text,
        completed: false
      }
      todos.push(todo)
      this.saveTodos(todos)
    },
    toggleTodo(id) {
      let todos = this.loadTodos()
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
    saveTodos(todos) {
      localStorage.setItem(storageKey, JSON.stringify(todos))
    },
    loadTodos () {
      let todos = null
      try {
        todos = JSON.parse(localStorage.getItem(storageKey))
      } catch (e) {}
      return todos || []
    },
    genTodoId() {
      return Math.random().toString(36).substr(2)
    }
  }

  const todoApp = {
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
    render() {
      this.renderTodoList()
      this.renderFooter()
    },
    onSubmit(e) {
      e.preventDefault()

      let text = this.form.todoText.value.trim()
      if (text.length > 0) {
        todoStore.addTodo(htmlEncode(text))
      }
      this.form.todoText.value = ''
      this.render()
    },
    onFilterLinkClick(linkElement, e) {
      e.preventDefault()
      const filter = linkElement.getAttribute('filter-value')
      todoStore.setVisibilityFilter(filter)
      this.render()
    },
    onTodoItemClick(e) {
      if (e.target.tagName !== 'LI') return

      let id = e.target.getAttribute('todo-id')
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

  window.addEventListener('storage', ()=>todoApp.render())
}
const todoStore = {
  // todos 为 todo item 列表
  todos: [
    // {
    //   id: 0,
    //   text: 'Goto Gym',
    //   completed: false
    // },
    // {
    //   id: 1,
    //   text: 'Learn Javascript',
    //   completed: true
    // },
    // {
    //   id: 2,
    //   text: 'Visit Friends',
    //   completed: false
    // }
  ],
  // visibility Filter
  // 显示todos列表时的过滤条件
  // 有三个值可选：
  // SHOW_ALL: 显示全部
  // SHOW_ACTIVE: 显示未完成
  // SHOW_COMPLETED: 显示已完成
  visibilityFilter: 'SHOW_ALL',
  // 工具方法
  getVisibleTodos() {
    // (1)
    // your code
    // 如何根据过滤条件，返回不同的todos呢？
    switch(this.visibilityFilter) {
      case 'SHOW_ALL':
        return this.todos
      case 'SHOW_ACTIVE':
        return this.todos.filter(todo => !todo.completed)
      case 'SHOW_COMPLETED':
        return this.todos.filter(todo => todo.completed)
      default:
        throw new Error('undefined filter value: ' + this.visibilityFilter)
    }
  }
}

let nextTodoId = 0
const todoApp = {
  // 初始化，插入UI
  init() {
    const html = `
      <form>
        <input type='text' name='text' autocomplete='off'/>
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
    this._render()
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
  _render() {
    this.renderTodoList()
    this.renderFooter()
  },
  // 表单提交时
  onSubmit(e) {
    e.preventDefault()
    // your code
    // 应该处理什么？
    const text = this.form.text.value.trim()
    if (text.length > 0) {
      this.addTodo(text)
    }
    this.form.text.value = ''
  },
  // 过滤条件点击时
  onFilterLinkClick(linkElement, e) {
    e.preventDefault()
    // your code
    // 应该处理什么？
    this.setVisibilityFilter(linkElement.getAttribute('filter-value'))
  },
  onTodoItemClick(e) {
    const li = e.target
    // your code
    // 应该处理什么？
    const todoId = +li.getAttribute('todo-id')
    this.toggleTodo(todoId)
  },
  // 添加一条todo
  addTodo(text) {
    const todo = {
      id: ++nextTodoId,
      text: text,
      completed: false // 新添加的todo，completed值是false
    }
    // (2)
    // your code
    // 如何向todoStore.todos里插入一条todo？
    todoStore.todos.push(todo)
    // 数据模型被更改后，要重新渲染
    this._render()
  },
  // 切换todo状态
  toggleTodo(id) {
    // (3)
    // your code
    // 根据id如何更改todoStore.todos里对应的todo.complete值？
    const findTodo = todoStore.todos.find(todo => todo.id === id)
    if (findTodo) {
      findTodo.completed = ! findTodo.completed
    }
    // 数据模型被更改后，要重新渲染
    this._render()
  },
  // 设置过滤条件
  setVisibilityFilter(filter) {
    todoStore.visibilityFilter = filter
    this._render()
  },
  renderTodoList() {
    // your code
    // 如何显示todo列表？
    const todos = todoStore.getVisibleTodos()
    const todoHTMLs = todos.map(todo =>
      `
        <li style='text-decoration:${todo.completed?"line-through": "none"}' todo-id='${todo.id}'>
          ${todo.text}
        </li>
      `
    )
    this.list.innerHTML = todoHTMLs.join('')
  },
  renderFooter() {
    // your code
    // 如何显示当前状态？
    this.filterLinks.forEach(filterLink => {
      if (filterLink.getAttribute('filter-value') === todoStore.visibilityFilter) {
        filterLink.classList.add('current')
      } else {
        filterLink.classList.remove('current')
      }
    })
  }
}

// 起点
const element = document.getElementById('root')
todoApp.init()
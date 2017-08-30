const todoStore = {
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

  visibilityFilter: 'SHOW_ALL',
  getVisibleTodos() {

    console.log(this.todos, this.visibilityFilter)
  }
}

let nextTodoId = 0
const todoApp = {
  init() {
    const html = `
      <form>
        <input type='text'/>
        <button>添加</button>
      </form>
      <ul class='list'>
      </ul>
      <p>
        查看：
        <span class='filter-link current all'>
          <span class='active'>全部</span>
          <a class='not-active' href='#'>全部</a>
        </span>,
        <span class='filter-link active'>
          <span class='active'>未完成</span>
          <a href='#'>未完成</a>
        </span>,
        <span class='filter-link completed'>
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
    addTodo()
    var _ul=document.getElementByTagName('ul')
    var c_li=document.creatElement('li')
    c_li.innerHTML=""
    _ul.appendChild(c_li)
    
  },
  // 过滤条件点击时
  onFilterLinkClick(linkElement, e) {
    e.preventDefault()
    console.log(e, linkElement)
    // your code
  renderTodoList()
  },
  onTodoItemClick(e) {
    const li = e.target
    li.style.textDecoration = "line-through"
    toggleTodo()
  },
  // 添加一条todo
  addTodo(text) {
    const todo = {
      id: ++nextTodoId,
      text: text,
      completed: false // 新添加的todo，completed值是false
    }
     Array.prototype.push(todoStore.todos,todo)

    // 数据模型被更改后，要重新渲染
    this.render()
  },
  // 切换todo状态
  toggleTodo(id) {
     for(i=0;i<todos.length,i++)
       todos[i].completed==true
    this.render()
  },
  // 设置过滤条件
  setVisibilityFilter(filter) {
    todoStore.visibilityFilter = filter
    this.render()
  },
  renderTodoList() {
    // your code
    // 如何显示todo列表？
  },
  renderFooter() {
    // your code
    // 如何显示当前状态？
  }
}

// 起点
const element = document.getElementById('root')
todoApp.init()
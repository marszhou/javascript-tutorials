function generate_todo(selector) {
  const URL = './todos.php'

  const todoStore = {
    visibilityFilter: 'SHOW_ALL',
    getVisibleTodos(todos, filter) {
      switch(filter) {
        case 'SHOW_ALL':
          return this.tododata
        case 'SHOW_ACTIVE':
          return this.tododata.filter(todo => !todo.completed)
        case 'SHOW_COMPLETED':
          return this.tododata.filter(todo => todo.completed)
        default:
          throw new Error('未知filter值: ' + filter)
      }
    },
    postTodo(todo){
      $.ajax(URL,{
        data: JSON.stringify(todo),
        processData: true,
        type: 'post',
        contentType: 'application/json',
        success: (todos) => {
          console.log('post response', todos)
        }
      });
    },
    putTodo(id){

    },
    getTodos() {
      $.ajax(URL, {
        type: 'get',
        success: (todos) =>{
          todoStore.tododata = todos
        }
      })
    },
    addTodo(text) {  //添加post函数
      const todo = {
      id: this.nextTodoId(),
      text: text,
      completed: false // 新添加的todo，completed值是false
      }
      this.postTodo(todo)
    },
    toggleTodo(id, callback) {
      this.putTodo(id)
      todoApp.render()
    },
    setVisibilityFilter(filter, callback) {
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

      todoStore.getTodos(this.render.bind(this))
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
    render(todos) {
      this.renderTodoList()
      this.renderFooter()
    },
    onSubmit(e) {
      e.preventDefault()
      let text = this.form.todoText.value.trim()
      if (text.length > 0) {
        todoStore.addTodo(text)
      }
      this.form.todoText.value = ''
      this.render()
    },
    onTodoItemClick(e) {
      if (e.target.tagName !== 'LI') return
      const li = e.target
      let id = li.getAttribute('todo-id')
      todoStore.toggleTodo(id)
    },
    onFilterLinkClick() {

    },
    renderTodoList(){
      todoStore.getTodos()
      const todos = todoStore.getVisibleTodos(todoStore.tododata,todoStore.visibilityFilter)
      let content = todos.map(todo => `
      <li style='text-decoration: ${ todo.completed ? 'line-through' : 'none'}' todo-id='${todo.id}'>
        ${todo.text}
      </li>
      `).join('')
      this.list.innerHTML = content
    },
    renderFooter(){
      this.filterLinks.forEach( filterLink => filterLink.classList.remove('current') )
      const currentFilterLink = element.querySelector(`[filter-value=${todoStore.visibilityFilter}]`)
      currentFilterLink.classList.add('current')
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
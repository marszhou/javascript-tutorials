function generate_todo(selector) {
  const URL = './todos.php'

  const todoStore = {
    visibilityFilter: 'SHOW_ALL',
    getVisibleTodos(todos, filter) {
    },
    getTodos(callback) {
      $.ajax(URL, {
        success: callback
      })
    },
    addTodo(text, callback) {
      setTimeout(() => {
        this.setLoading(false)
        callback()
      }, 1000)
    },
    toggleTodo(id, callback) {
    },
    setVisibilityFilter(filter, callback) {
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

        <img src='giphy.gif' class='loading' style='display:none'/>

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
    showLoading(bool) {
      if (bool) {
        this.loading.style.display = ''
        this.list.style.display = 'none'
      } else {
        this.loading.style.display = 'none'
        this.list.style.display = ''
      }
    },

    render(todos) {
      this.showLoading(todoStore.loading)
      if (todoStore.loading) {
        return
      }
    },

    onSubmit(e) {
      e.preventDefault()
      todoStore.setLoading(true)
      todoStore.addTodo(null, this.render.bind(this))
      this.render()
    },
    onTodoItemClick() {

    },
    onFilterLinkClick() {

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
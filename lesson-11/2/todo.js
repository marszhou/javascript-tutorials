const initTodo = (element) => {
  const todoApp = {
    todos: [],
    visibilityFilter: 'SHOW_ALL',
    getVisibleTodos() {
      return this.todos.filter(todo => {
        switch (this.visibilityFilter) {
          case 'SHOW_ALL':
            return todo
          case 'SHOW_ACTIVE':
            return !todo.completed
          case 'SHOW_COMPLETED':
            return todo.completed
          default:
            throw new Error('Unknow filter: ' + this.visibilityFilter)
        }
      })
    },
    addTodo(text) {

    },
    toggleTodo(id) {

    },
    setVisibilityFilter(filter) {

    },
    renderAddTodo() {
      return 1
    },
    renderTodoList() {
      return 2
    },
    renderFooter() {
      return 3
    },
    render() {
      const html = `
        <div>
          ${this.renderAddTodo()}
          ${this.renderTodoList()}
          ${this.renderFooter()}
        </div>
      `
      element.innerHTML = html
    }
  }
  todoApp.render()
}
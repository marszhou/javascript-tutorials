import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions'
import { withRouter } from 'react-router-dom'
import { getVisibleTodos } from '../reducers'

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(
    state,
    ownProps.match.params.filter || 'all'
  )
})

export default withRouter(
  connect(mapStateToProps, {
    onTodoClick: toggleTodo
  })(TodoList)
)

import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import * as actions from '../actions'
import { withRouter } from 'react-router-dom'
import { getVisibleTodos, getIsFetching, getErrorMessage } from '../reducers'
import React from 'react'
import FetchError from './FetchError'

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filter !== this.props.filter) {
      this.fetchData()
    }
  }

  fetchData() {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter).then(response => {
      console.log('DONE')
    })
  }

  render() {
    const { toggleTodo, todos, isFetching, errorMessage } = this.props
    if (isFetching && todos.length === 0) {
      return <p>Loading...</p>
    }
    if (errorMessage && todos.length === 0) {
      return (
        <FetchError
          message={errorMessage}
          onRetry={() => this.fetchData()}
        />
      )
    }

    return <TodoList onTodoClick={toggleTodo} todos={todos} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.match.params.filter || 'all'
  return {
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    todos: getVisibleTodos(state, filter),
    filter
  }
}

VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    actions
  )(VisibleTodoList)
)

export default VisibleTodoList

import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import * as actions from '../actions'
import { withRouter } from 'react-router-dom'
import { getVisibleTodos } from '../reducers'
import React from 'react'

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
    const {filter, fetchTodos} = this.props
    fetchTodos(filter)
  }

  render() {
    const {toggleTodo, ...rest} = this.props
    return <TodoList onTodoClick={toggleTodo} {...rest} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.match.params.filter || 'all'
  return {
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

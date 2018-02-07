import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Segment} from 'semantic-ui-react'
import cx from 'classnames'

class Roster extends Component {
  static propTypes = {
    users: PropTypes.array,
    selectedUsers: PropTypes.array
  }
  render() {
    const {users, selectedUsers} = this.props
    return (
      <Segment.Group className="left-sidebar">
        {
          users.map(user => {
            const active = !!selectedUsers.find(su => su === user)
            return (<Segment key={user} className={cx({active})}>{user}</Segment>)
          })
        }
      </Segment.Group>
    )
  }
}

export default Roster

import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Header,
  Grid,
  Segment,
  Menu,
  Label,
  Input,
  Form,
  Button,
  Divider,
  Statistic,
  Message,
  Loader
} from 'semantic-ui-react'

const Results = ({ selectedUsers }) => {
  return (
    <Segment>
      <Header>获奖名单</Header>
      <ol>{selectedUsers.map((user, index) => <li key={index}>{user}</li>)}</ol>
    </Segment>
  )
}

Results.propTypes = {
  selectedUsers: PropTypes.array
}

export default Results

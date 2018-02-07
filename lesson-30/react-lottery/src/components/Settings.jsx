import React, { Component } from 'react'
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

class Settings extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }

  state = {
    total: 0,
    groupCount: 0
  }

  handleSubmit = e => {

  }

  render() {
    console.log(this.state)
    return (
      <Segment>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              label="总共抽取数量"
              control={Input}
              placeholder="总数"
              onChange={e => {
                this.setState({ total: +e.target.value || 0 })
              }}
            />
            <Form.Field
              label="共抽取几组？"
              control="input"
              placeholder="组"
              onChange={e => {
                this.setState({ groupCount: +e.target.value || 0 })
              }}
            />
          </Form.Group>
          <Button type="button" primary onClick={() => this.props.onSubmit(this.state)}>
            Submit
          </Button>
          <Divider hidden />
        </Form>
      </Segment>
    )
  }
}

export default Settings

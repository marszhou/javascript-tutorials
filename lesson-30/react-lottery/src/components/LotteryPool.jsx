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

class LotteryPool extends Component {
  static propTypes = {
    groupCount: PropTypes.number,
    total: PropTypes.number,
    unselectedUsers: PropTypes.array,
    currentGroup: PropTypes.number,
    selectedCount: PropTypes.number,
    onReset: PropTypes.func,
    onDraw: PropTypes.func,
    onFinish: PropTypes.func
  }

  // onReset groupCount total unselectedUsers currentGroup onDraw onFinish
  state = {
    running: false,
    lastList: [],
    currentList: []
  }

  getCurrentList() {
    const { unselectedUsers, total, groupCount } = this.props
    const loopTimes = total / groupCount

    const ret = []
    const leftUsers = [...unselectedUsers]
    for (let i = 0; i < loopTimes; i++) {
      const rand = Math.floor(Math.random() * leftUsers.length)
      const selected = leftUsers[rand]
      ret.push(selected)
      leftUsers.splice(rand, 1)
    }

    return ret
  }

  run() {
    this.timer = setInterval(() => {
      this.setState({
        currentList: this.getCurrentList()
      })
    }, 50)
  }

  handleStart = () => {
    this.setState(
      {
        running: true
      },
      this.run
    )
  }

  handleStop = () => {
    window.clearInterval(this.timer)
    this.setState({
      running: false,
      lastList: this.state.currentList
    }, () => this.props.onDraw(this.state.currentList))
  }

  render() {
    const {
      groupCount,
      currentGroup,
      total,
      unselectedUsers,
      selectedCount
    } = this.props

    const { running, lastList, currentList } = this.state

    let content = null

    if (running) {
      content = [
        <Message.Header key="header">正在抽奖 第{currentGroup+1}组...</Message.Header>,
        <p key="body">{currentList.join(',')}</p>
      ]
    } else {
      if (lastList.length > 0) {
        content = [
          <Message.Header key="header">
            第{currentGroup}组抽奖结果
          </Message.Header>,
          <p key="body">{lastList.join(',')}</p>
        ]
      } else {
        content = null
      }
    }

    return [
      <Segment attached="top" key="controls">
        <Statistic.Group widths="4" size="mini">
          <Statistic>
            <Statistic.Value>进行中</Statistic.Value>
            <Statistic.Label>状态</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              {selectedCount}/{total}
            </Statistic.Value>
            <Statistic.Label>总计抽取</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>
              {currentGroup}/{groupCount}
            </Statistic.Value>
            <Statistic.Label>抽取次数</Statistic.Label>
          </Statistic>
          <Statistic>
            <Button size="large" type="button" onClick={this.props.onReset}>
              终止
            </Button>
          </Statistic>
        </Statistic.Group>
      </Segment>,
      <Message
        color="black"
        size="massive"
        className="main-content"
        attached
        key="message"
      >
        {content}
      </Message>,
      <Segment key="btns" attached textAlign="center">
        {running ? (
          <Button type="button" color="red" onClick={this.handleStop}>
            停止
          </Button>
        ) : (
          <Button type="button" color="red" onClick={this.handleStart}>
            抽第{currentGroup + 1}组
          </Button>
        )}
      </Segment>
    ]
  }
}

export default LotteryPool

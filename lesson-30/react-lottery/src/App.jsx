import React, { Component } from 'react'
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
import Roster from './components/Roster'
import Settings from './components/Settings'
import LotteryPool from './components/LotteryPool'
import Results from './components/Results'

const users = '沈毅恒,余文峻,张未,徐明宽,叶芃,杨景钦,吕欣,陈俊锟,袁伟强,吴作凡,杨家齐,沈睿,翁文涛,赵晟宇,高杰,欧阳思琦,龙耀为,张洗月,董玥,杨坤禾,陈治学,迟舒乘,唐一凡,陈柯润,陈俊杰,胡亦行,谢添乐,尹龙晖,叶添,蒋佳轩,潘慰慈,申奥,高敏博,郑书豪,袁宾雨,张心之,毛怡欢,李佳蔚,王世因,董克凡,姜志豪,李子豪,李一鸣,许子望,邹逍遥,汪文潇,钟惠兴,张若天,张天纵,林漓尽致,任之洲,朱晨智,娄晨耀,王藴韵,韩迟,张志俊,金策,任翰林,倪博楠,李博洋,唐博识,任崇旭,梅知雨,覃煜鑫,赵浩宇,林一衡,郭铖浩,王润喆,宋政钦,王远皓,卢睿,洪文浩,张羿翔,邹岳松,李政,姜舜华,姚顺雨,张恒捷,孙明杰,凌展,吕凯风,王鉴浩,束欣凯,刘研绎,杜瑜皓,黄涛岸,杜卓帆,余岳,岑若虚,余行江,刘剑成,谢倩,彭雨翔,谢昌志,林子窈,王浩昀,刘蕴超,彭炳辉,张皓辰,陶润洲,张玮中,汪至祺,贺嘉帆,王旭东,赵梓硕,陈胤伯,崔馨月,吴睿涵,黎天鸿,乔明达,俞鼎力,黄嘉泰,贺子航,黄志翱,刘定峰,洪鑫焰,黄施霖,钟皓曦,周天茗,何奇正,吕可凡,董宏华,左世良,茅佳源,李文正,康宇衡,胡伦嘉,孟涛,梁桢枭,赵金昊,罗辑,吴晨玮,周杉,鲍业伦,许悦,魏子豪'.split(
  ','
)

class App extends Component {
  state = {
    selectedUsers: [],
    total: 0,
    groupCount: 0,
    currentGroup: 0
  }

  componentDidMount() {
    const el = document.querySelector('link[rel="stylesheet"]')
    el.addEventListener('load', () =>
      this.setState({
        cssLoaded: true
      })
    )
  }

  handleSettingSubmit = ({ total, groupCount }) => {
    if (total <= 0 || groupCount <= 0) {
      alert('错误')
    } else {
      this.setState({
        total,
        groupCount
      })
    }
  }

  handleReset = () => {
    this.setState({
      selectedUsers: [],
      total: 0,
      groupCount: 0,
      currentGroup: 0
    })
  }

  handleDraw = group => {
    this.setState({
      selectedUsers: this.state.selectedUsers.concat(group), // [...this.selel, ...group]
      currentGroup: this.state.currentGroup + 1
    })
  }

  handleFinish = () => {}

  render() {
    const {
      cssLoaded,
      selectedUsers,
      groupCount,
      currentGroup,
      total
    } = this.state
    return cssLoaded ? (
      <Container style={{ marginTop: '1em' }}>
        <Header as="h1">抽奖</Header>
        <Grid columns={3} stackable>
          <Grid.Column width={3}>
            <Roster users={users} selectedUsers={selectedUsers} />
          </Grid.Column>
          <Grid.Column width={13}>
            {!(total > 0 && groupCount > 0) ? (
              <Settings onSubmit={this.handleSettingSubmit} />
            ) : currentGroup >= groupCount ? (
              <Results selectedUsers={selectedUsers}/>
            ) : (
              <LotteryPool
                groupCount={groupCount}
                total={total}
                unselectedUsers={users.filter(
                  user => selectedUsers.findIndex(su => su === user) === -1
                )}
                currentGroup={currentGroup}
                selectedCount={selectedUsers.length}
                onReset={this.handleReset}
                onDraw={this.handleDraw}
                onFinish={this.handleFinish}
              />
            )}
          </Grid.Column>
        </Grid>
      </Container>
    ) : null
  }
}

export default App

import React, { Component } from 'react';
import NameList from './NameList';
import CountSet from './CountSet';
import Result from './Result';
import NameData from './data.json';
import { arrayShuffle } from './utils';

class Nameselecter extends Component {
  constructor(props){
    super(props);
    this.state = {
      targetPeopleAmount: null,
      targetGroups: null,
      groupCount: 1,
      nameList: [...NameData["names"]],
      showNames: [],
      unselectedNames: [...NameData["names"]],
      randomShow: true
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", (e) => {
      if(e.keyCode === 32) {
        e.preventDefault();
        this.setState({
          randomShow: false
        })
      }
      if(e.keyCode === 13) {
        if(this.state.groupCount < this.state.targetGroups) {
          this.setState({
            randomShow: true,
            groupCount: this.state.groupCount + 1
          })
          this.handleStart();
        }
      }
    })
  }

  handleChange = (e) => {
    const name = e.target.name === "targetPeopleAmount" ? "targetPeopleAmount" : "targetGroups";
    let value = null;
    if(e.target.value.trim()) {
      value = parseInt(e.target.value.trim());
      this.setState({
        [name]: parseInt(value)
      })
    }
    else{
      this.setState({
        [name]: undefined
      })
    }
  }

  handleStart = () => {
    if(this.state.targetPeopleAmount % this.state.targetGroups !== 0) {
      alert("请重新输入")
      return
    }
    const showNamesLength = this.state.targetPeopleAmount / this.state.targetGroups;
    if(this.state.groupCount <= this.state.targetGroups) {
      let temporaryNameList = Array.from(this.state.unselectedNames);
      let showNames = [];
      const showNamesSelect = () => {
        if(!this.state.randomShow) {
          clearInterval(randomShowNames);
          showNames.forEach((selectedName) =>
            this.state.nameList.find(name => 
              name["name"] === selectedName["name"]
            )["selected"] = true
          );
          temporaryNameList = temporaryNameList.slice(showNames.length)
          this.setState({
            unselectedNames: temporaryNameList
          })
        }
        else{
          temporaryNameList = arrayShuffle(temporaryNameList);
          showNames = temporaryNameList.slice(0, showNamesLength);
          this.setState({
            showNames: showNames,
          })
        }
      }
      let randomShowNames = setInterval(showNamesSelect, 100);
    }
  }

  onReset = () => {
    NameData["names"].forEach(name =>
      name["selected"] = false
    )
    this.setState({
      targetPeopleAmount: null,
      targetGroups: null,
      groupCount: 1,
      nameList: [...NameData["names"]],
      showNames: [],
      unselectedNames: [...NameData["names"]],
      randomShow: true
    })
  }


  render() {
    const { targetPeopleAmount, targetGroups, groupCount, showNames, nameList } = this.state;
    
    return (
      <div className="ui divided three column grid">
        <div className="stretched row">
          <div className="ui compact segment">
            <div className="ui segment"><NameList nameList={nameList}/></div>
          </div>
          <div>
            <div className="ui segment">
              <CountSet 
                handleChange={this.handleChange}
                targetPeopleAmount={targetPeopleAmount}
                targetGroups={targetGroups}
                handleStart={this.handleStart}
              />
            </div>
            <div className="ui segment">
              <Result 
                targetPeopleAmount={targetPeopleAmount}
                targetGroups={targetGroups}
                groupCount={groupCount}
                showNames={showNames}
                onReset={this.onReset}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nameselecter;
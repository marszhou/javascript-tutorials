import React, { Component } from 'react';
import NameList from './NameList';
import CountSet from './CountSet';
import Result from './Result';
import NameData from './data.json';

class Nameselecter extends Component {
  constructor(props){
    super(props);
    this.state = {
      peopleAmount: undefined,
      peopleTeams: undefined,
      teamNumber: undefined
    }
  }

  handleChange = (e) => {
    const name = e.target.name === "peopleAmount" ? "peopleAmount" : "peopleTeams";
    let value = null;
    if(e.target.value) {
      value = parseInt(e.target.value);
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
    
  }

  render() {
    const names = NameData["names"];
    const { peopleAmount, peopleTeams, teamNumber } = this.state;
    
    return (
      <div className="ui divided three column grid">
        <div className="stretched row">
          <div className="ui compact segment">
            <div className="ui segment"><NameList names={names}/></div>
          </div>
          <div>
            <div className="ui segment">
              <CountSet 
                handleChange={this.handleChange}
                peopleAmount={peopleAmount}
                peopleTeams={peopleTeams}
              />
            </div>
            <div className="ui segment">
              <Result 
                peopleAmount={peopleAmount}
                peopleTeams={peopleTeams}
                teamNumber={teamNumber}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nameselecter;
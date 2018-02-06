import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Result extends Component {
  static propTypes = {
    peopleAmount: PropTypes.number,
    peopleTeams: PropTypes.number,
    teamNumber: PropTypes.number
  }

  render() {
    const { peopleAmount, peopleTeams } = this.props;
    return (
      <div>
        <p>
          抽取{peopleAmount ? peopleAmount : 0}个人，
          共{peopleTeams ? peopleTeams : 0}组
        </p>
        <div className="ui message">
          <div className="header">抽取第X组</div>
          <p>We updated our privacy policy here to better service our customers.
            We recommend reviewing the changes.
          </p>
        </div>
        <button className="ui button" role="button">重置</button>
      </div>
    );
  }
}

export default Result;
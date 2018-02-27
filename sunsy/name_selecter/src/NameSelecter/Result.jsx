import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Result extends Component {
  static propTypes = {
    targetPeopleAmount: PropTypes.number,
    targetGroups: PropTypes.number,
    groupCount: PropTypes.number,
    showNames: PropTypes.array,
    onReset: PropTypes.func
  }

  render() {
    const { targetPeopleAmount, targetGroups, showNames, groupCount, onReset } = this.props;
    return (
      <div>
        <p>
          抽取{targetPeopleAmount ? targetPeopleAmount : 0}个人，
          共{targetGroups ? targetGroups : 0}组
        </p>
        <div className="ui message">
          <div className="header">抽取第{groupCount}组</div>
          <p>名单：
            {showNames.map(name => (
              <div role="list" className="ui celled horizontal list">
                <div role="listitem" className="item">{name["name"]}</div>
              </div>
            ))}
          </p>
        </div>
        <button className="ui button" role="button" onClick={onReset}>重置</button>
      </div>
    );
  }
}

export default Result;
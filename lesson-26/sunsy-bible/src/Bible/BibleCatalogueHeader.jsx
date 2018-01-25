import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BibleCatalogueHeader extends Component {
  static propTypes = {
    onInputChange: PropTypes.func
  }

  render() {
    return (      
      <div className="title">
        <div className="left">
          <span style={{paddingLeft: 5, fontWeight: 'bold'}}>书</span>
        </div>
        <div className="right">
          <i className="fa fa-th" aria-hidden="true" style={{paddingRight: 5}} />
        </div>
        <div className="content">
          <div className="search">
            <i className="fa fa-search searchIcon" aria-hidden="true" />
            <input 
              type="text" 
              placeholder="过滤..." 
              id="input" 
              onChange={event => { this.props.onInputChange(event) }} />
          </div>
        </div>
      </div>
    );
  }
}

export default BibleCatalogueHeader;
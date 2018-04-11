import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import store from '../store'
import PropTypes from 'prop-types'

class PageSelector extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { currentPage, handlePageChange } = this.props;
    const totalPages = store.calculateTotalPages();
    const pagesIndex = store.calculatePagesIndex(currentPage);
    return (
      <div>
        <Link to={`/`} style={{textDecoration: 'none', color: 'blue'}} onClick={() => handlePageChange(-1)}>{currentPage > 1 ? '上一页' : ''}</Link>
        {
          pagesIndex.map(page => 
            <span key={page} style={{padding: '10px'}}>
              <NavLink to={`/`} 
                style={page === currentPage ? 
                  {textDecoration: 'none', color: 'red', fontSize: '120%'} : {color: 'blue'}} 
                onClick={() => handlePageChange(page, true)}
              >{`${page} `}
              </NavLink>
            </span>
          )
        }
        <Link to={`/`} style={{textDecoration: 'none',color: 'blue'}} onClick={() => handlePageChange(1)}>{currentPage < totalPages ? '下一页' : ''}</Link>
      </div>
    );
  }
}

export default PageSelector;
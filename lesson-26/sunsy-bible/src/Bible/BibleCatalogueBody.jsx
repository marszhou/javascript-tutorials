import React, { Component } from 'react';

class BibleCatalogueBody extends Component {
  render() {
    return (
      <div className="list-content">
        <div className="bookGroup">
          <div className="title">
            旧约
          </div>
          <ul className="list">
            <li className="highlighted" role="button" tabIndex={0}>
              <span>创世纪</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>出埃及记</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>利未记</span>
            </li>
          </ul>
        </div>
        <div className="bookGroup">
          <div className="title">
            新约
          </div>
          <ul className="list">
            <li className role="button" tabIndex={0}>
              <span>马太福音</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>马可福音</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>路加福音</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>约翰福音</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>罗马书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>哥林多前书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>哥林多后书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>加拉太书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>以弗所书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>腓立比书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>歌罗西书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>帖撒罗尼迦前书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>帖撒罗尼迦后书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>提摩太前书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>提摩太后书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>提多书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>腓利门书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>希伯来书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>雅各书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>彼得前书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>彼得后书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>约翰一书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>约翰二书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>约翰三书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>犹大书</span>
            </li>
            <li className role="button" tabIndex={0}>
              <span>启示录</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default BibleCatalogueBody;
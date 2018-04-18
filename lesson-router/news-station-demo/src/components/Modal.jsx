import React from 'react';
import {withRouter} from 'react-router'

const Modal = ({match, history, children}) => {
  console.log(history)
  return (
    <div
      onClick={() => history.goBack()}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "fixed",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          bottom: 25,
          padding: 15,
          border: "2px solid #444",
          overflowY: 'auto'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default withRouter(Modal);
import './HeaderBar.css';
import React, { Component } from 'react';

class HeaderBar extends React.Component {

  constructor(props) {
    super(props);
    this.name = "Bill";
  }

  render () {
    return (
      <div className = "header-bar-container">
        <div className = "header-text">
          Meet Team {this.name}.
        </div> 
      </div>
    );
  }
}

export default HeaderBar;

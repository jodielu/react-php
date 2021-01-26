import './SideBar.css';
import React, { Component } from 'react';

class SideBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    let teammates = ["Andrew Kou", "Jodie Lu", "Rachel Lau", "Kevin Zhu", "Raymond Guo", "Matt Jeng", "Steven Tsay", "Kyle Tse"];
    return (
      <div className = "side-bar-container">
        {teammates.map(mate => (
          <a className = "side-bar-tab">
              {mate}
          </a> 
        ))}
      </div>
    );
  }
}

export default SideBar;
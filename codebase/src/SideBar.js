import './SideBar.css';
import React, { Component } from 'react';

class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    }
    this.selectPerson = this.selectPerson.bind(this)
  }

  componentDidMount() {
    console.log(this.props.selected)
    this.setState({
      selected: this.props.selected
    })
  }

  selectPerson(number) {
    this.setState({
      selected: number
    });
    this.props.selectPerson(number);
  }

  render () {
    let teammates = ["Andrew Kou", "Jodie Lu", "Rachel Lau", "Kevin Zhu", "Raymond Guo", "Matt Jeng", "Steven Tsay", "Kyle Tse"];
    return (
      <div className = "side-bar-container">
        {teammates.map((mate, index) => (
            <button className = {"side-bar-tab " + (this.state.selected == index ? 'active' : '')} id={index} onClick={() => this.selectPerson(index)}>
                {mate}
            </button>
        ))}
      </div>
    );
  }
}

export default SideBar;
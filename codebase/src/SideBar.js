import './SideBar.css';
import React, { Component } from 'react';

class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      names: [],
    }
    this.selectPerson = this.selectPerson.bind(this)
  }

  componentDidMount() {
    this.setState({
      selected: this.props.selected
    })

    for (let i = 0; i < this.props.memberInfo.length; i++) {
      this.state.names.push(this.props.memberInfo[i].name);
    }
  }

  selectPerson(number) {
    this.setState({
      selected: number
    });
    this.props.selectPerson(number);
  }

  render () {
    return (
      <div className = "side-bar-container">
        {this.state.names.map((mate, index) => (
            <button className = {"side-bar-tab " + (this.state.selected == index ? 'active' : '')} id={index} onClick={() => this.selectPerson(index)}>
                {mate}
            </button>
        ))}
      </div>
    );
  }
}

export default SideBar;
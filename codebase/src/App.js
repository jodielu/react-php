import logo from './logo.svg';
import './App.css';
import HeaderBar from './HeaderBar.js';
import SideBar from './SideBar.js';
import InfoCard from './InfoCard.js';
import React, { Component } from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      memberInfo: undefined,
      selected: 0
    }
    this.selectPerson = this.selectPerson.bind(this)
  }

  componentDidMount() {
    const url = 'http://localhost:8000/api/mailchimpies.php/'
    axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods' : 'GET, POST',
        "Access-Control-Allow-Headers" : "access-control-allow-headers, access-control-allow-methods, access-control-allow-origin",
      }
    }).then(response => response.data)
    .then((data) => {
      console.log(data);
      this.setState({ memberInfo: data });
      this.setState({ isLoading: false });
     });
  }

  selectPerson(number) {
    this.setState({ selected: number });
    console.log(number);
  }

  render () {
    const { isLoading, memberInfo } = this.state;

    if (isLoading) {
      return <div className='App'>Loading</div>
    }

    return (
      <div className="App">
        <div className="header">
          <HeaderBar/>
        </div>
        <div className="content">
          <div className="sidebar">
            <SideBar selectPerson = {this.selectPerson} selected = {this.state.selected}/>
          </div>
          <div className="infocard">
            <InfoCard name = {this.state.memberInfo[this.state.selected].name} year = {this.state.memberInfo[this.state.selected].year} birthday = {this.state.memberInfo[this.state.selected].birthday} fact = {this.state.memberInfo[this.state.selected].funfact}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

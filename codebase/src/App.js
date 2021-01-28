import logo from './logo.svg';
import './App.css';
import HeaderBar from './HeaderBar.js';
import SideBar from './SideBar.js';
import InfoCard from './InfoCard.js';
import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

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
    axios({
      method: 'get',
      url: url,
      config: { headers: {
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods' : 'GET, POST',
        "Access-Control-Allow-Headers" : "access-control-allow-headers, access-control-allow-methods, access-control-allow-origin", 
      }}
    }).then(response => response.data)
    .then((data) => {
      this.setState({ memberInfo: data });
      this.setState({ isLoading: false });
     });
  }

  addNewMember() {
    const url = 'http://localhost:8000/api/mailchimpies.php/'
    let formData = new FormData();
    formData.append('name', "Jobie")
    formData.append('year', "2nd")
    formData.append('major', "CS")
    formData.append('birthday', "akdufhkajshfj")
    formData.append('funfact', "akdjhdaf")
    formData.append('favfood', "aldjflk")
    axios({
        method: 'post',
        url: url,
        data: formData,
        config: { headers: {
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Allow-Methods' : 'GET, POST',
          "Access-Control-Allow-Headers" : "access-control-allow-headers, access-control-allow-methods, access-control-allow-origin", 
        }}
    }).then(response => response.data)
    .then((data) => {
      this.setState({ memberInfo: data });
      this.setState({ isLoading: false });
     });
  }

  selectPerson(number) {
    this.setState({ selected: number });
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
            <SideBar memberInfo = {this.state.memberInfo} selectPerson = {this.selectPerson} selected = {this.state.selected}/>
          </div>
          <div className="infocard">
            <InfoCard memberInfo = {this.state.memberInfo} selected = {this.state.selected}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

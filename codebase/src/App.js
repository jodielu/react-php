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
      
    };
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
     });
  }

  render () {
    return (
      <div className="App">
        <div className="header">
          <HeaderBar/>
        </div>
        <div className="content">
          <div className="sidebar">
            <SideBar/>
          </div>
          <div className="infocard">
            <InfoCard name="Andrew"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

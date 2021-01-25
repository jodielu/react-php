import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    const url = 'http://localhost:8000/api/mailchimpies.php'
    axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    }).then(response => response.data)
    .then((data) => {
      console.log(data);
     });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

import './InfoCard.css';
import React, { Component } from 'react';

class InfoCard extends React.Component {

  constructor(props) {
    super(props);
    this.name = "Andrew";
  }

  render () {
    return (
        <div className = "info-card-container">
          <div className = "info-container">
              <div className = "info-text"> 
                  <p className = "title">Name:</p>
                  <p className = "response">{this.props.name}</p>
              </div>
              <div className = "info-text"> 
                  <p className = "title">Year:</p>
                  <p className = "response">{this.props.year}</p>
              </div>
              <div className = "info-text"> 
                  <p className = "title">Birthday:</p>
                  <p className = "response">{this.props.birthday}</p>
              </div>
              <div className = "info-text"> 
                  <p className = "title">Fun Fact:</p>
                  <p className = "response">{this.props.fact}</p>
              </div>
            </div>
        </div>
    );
  }
}

export default InfoCard;

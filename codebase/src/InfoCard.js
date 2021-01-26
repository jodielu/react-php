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
            <div className = "info-text"> 
                <p>Name:</p>
                <p>{this.props.name}</p>
            </div>
            <div className = "info-text"> 
                <p>Year:</p>
                <p>{this.props.year}</p>
            </div>
            <div className = "info-text"> 
                <p>Birthday:</p>
                <p>{this.props.birthday}</p>
            </div>
            <div className = "info-text"> 
                <p>Fun Fact:</p>
                <p>{this.props.fact}</p>
            </div>
        </div>
    );
  }
}

export default InfoCard;

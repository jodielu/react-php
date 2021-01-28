import './InfoCard.css';
import React, { Component } from 'react';

class InfoCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const person = this.props.memberInfo[this.props.selected];
    return (
        <div className = "info-card-container">
          <div className = "info-container">
              <div className = "info-text"> 
                  <p className = "title">Name:</p>
                  <p className = "response">{person.name}</p>
              </div>
              <div className = "info-text"> 
                  <p className = "title">Year and Major:</p>
                  <p className = "response">{person.year}, {person.major}</p>
              </div>
              <div className = "info-text"> 
                  <p className = "title">Birthday:</p>
                  <p className = "response">{person.birthday}</p>
              </div>
              <div className = "info-text"> 
                  <p className = "title">Fun Fact:</p>
                  <p className = "response">{person.funfact}</p>
              </div>
            </div>
        </div>
    );
  }
}

export default InfoCard;

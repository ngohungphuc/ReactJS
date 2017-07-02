import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Quiz extends Component {
  render() {
    return (
      <div>
        {this
          .props
          .books
          .map(function (b) {
            return <Book title={b} /> 
        })}</div>
    );
  }
}

class Book extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4></div>
    );
  }
}

export default Quiz;

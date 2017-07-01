import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
var _ = require('lodash');

const Stars = (props) => {
  const numberOfStars = Math.floor(Math.random() * 9);

  return (
    <div className="col-md-5">
      {_
        .range(numberOfStars)
        .map(i => <i key={i} className="fa fa-star"></i>)
      }
    </div>
  )
}

const Button = (props) => {
  return (
    <div className="col-md-2">
      <button>
        =
      </button>
    </div>
  )
}

const Answer = (props) => {
  return (
    <div className="col-md-5">
      <span>5</span>
    </div>
  )
}

const Numbers = (props) => {
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) => <span key={i}>{number}</span>)}
      </div>
    </div>
  )
}

Numbers.list = _.range(1,10);

class Game extends Component {
  render() {
    return (
      <div>
        <h3>Play nine</h3>
        <div className="row">
          <Stars/>
          <Button/>
          <Answer/>
        </div>
        <br/>
        <Numbers/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div><Game/></div>
    );
  }
}

export default App;

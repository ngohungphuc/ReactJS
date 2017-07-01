import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
var _ = require('lodash');

const Stars = (props) => {
  return (
    <div className="col-md-5">
      {_
        .range(props.numberOfStars)
        .map(i => <i key={i} className="fa fa-star"></i>)
}
    </div>
  )
}

const Button = (props) => {
  let button;
  switch (props.answerIsCorrect) {
    case true:
      button = <button className="btn btn-success" onClick={props.acceptAnswer}>
        <i className="fa fa-check"></i>
      </button>;
      break;
    case false:
      button = <button className="btn btn-danger">
        <i className="fa fa-times"></i>
      </button>;
      break;
    default:
      button = <button
        className="btn"
        onClick={props.checkAnswer}
        disabled={props.selectedNumbers.length === 0}>
        =
      </button>;
      break;
  }

  return (
    <div className="col-md-2">
      {button}
    </div>
  )
}

const Answer = (props) => {
  return (
    <div className="col-md-5">
      {props
        .selectedNumbers
        .map((number, i) => <span key={i} onClick={() => props.unselectNumber(number)}>{number}</span>)}
    </div>
  )
}

const Numbers = (props) => {
  const numberClassName = (number) => {
    if (props.usedNumbers.indexOf(number) >= 0) {
      return 'used';
    }
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return 'selected';
    }
  }
  return (
    <div className="card text-center">
      <div>
        {Numbers
          .list
          .map((number, i) => <span
            key={i}
            className={numberClassName(number)}
            onClick={() => props.selectNumber(number)}>{number}</span>)}
      </div>
    </div>
  )
}

Numbers.list = _.range(1, 10);

class Game extends Component {
  state = {
    selectedNumbers: [],
    randomNumberOfStars: 1 + Math.floor(Math.random() * 9),
    answerIsCorrect: null,
    usedNumbers: []
  };

  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) 
      return;
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState
        .selectedNumbers
        .concat(clickedNumber)
    }));
  }

  //filter out number that match clicked number
  unselectNumber = (clickedNumber) => {
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState
        .selectedNumbers
        .filter(number => number !== clickedNumber)
    }));
  };

  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.randomNumberOfStars === prevState
        .selectedNumbers
        .reduce((acc, n) => acc + n, 0)
    }));
  };

  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState
        .usedNumbers
        .concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      randomNumberOfStars: 1 + Math.floor(Math.random() * 9)
    }));
  }

  render() {
    const {selectedNumbers, randomNumberOfStars, answerIsCorrect, usedNumbers} = this.state;
    return (
      <div>
        <h3>Play nine</h3>
        <div className="row">
          <Stars numberOfStars={randomNumberOfStars}/>
          <Button
            selectedNumbers={selectedNumbers}
            checkAnswer={this.checkAnswer}
            acceptAnswer={this.acceptAnswer}
            answerIsCorrect={answerIsCorrect}/>
          <Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber}/>
        </div>
        <br/>
        <Numbers
          selectedNumbers={selectedNumbers}
          selectNumber={this.selectNumber}
          usedNumbers={usedNumbers}/>
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

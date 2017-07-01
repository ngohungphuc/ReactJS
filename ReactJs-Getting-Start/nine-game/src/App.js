import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const Stars = (props) => {
  return (
    <div className="col-md-5">
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
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
      ...
    </div>
  )
}

const Numbers = (props) => {
  return (
    <div className="card text-center">
      <div>
        <span>1</span>
        <span className="selected">2</span>
        <span className="used">3</span>
      </div>
    </div>
  )
}

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

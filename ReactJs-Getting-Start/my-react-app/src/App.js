import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        counter: this.state.counter + 1
      };
    });
  }; */

  render() {
    return (
      <button onClick={this.props.onClickFunction}>
       +{this.props.incrementValue}
      </button>
    );
  }
}

const Result = (props) => {
  return (
    <div>{props.counter}</div>
  );
};

class App extends Component {
  state = {
    counter: 0
  };

  incrementCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };
  render() {
    return (
      <div>
        <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

export default App;

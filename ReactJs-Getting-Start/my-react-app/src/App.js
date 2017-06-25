import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  /*constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }*/
  state = { counter: 0 };

  handleClick = () => {
    this.setState((prevState) => {
      return {
        counter: this.state.counter + 1
      };
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.counter}
      </button>
    );
  }
}

export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

let axios = require('axios');

const Card = (props) => {
  return (
    <div style={{
      margin: '1em'
    }}>
      <img src={props.avatar_url} width="100" alt=""/><br/>
      <div style={{
        display: 'inline-block'
      }}>
        {props.name}
      </div>
      <div>{props.company}</div>
    </div>
  );
}

//TODO : research ... spread operator
const CardList = (props) => {
  return (
    <div>
      {props
        .cards
        .map(card => <Card key={card.id} {...card}/>)}
    </div>
  );
}

class Form extends React.Component {
  state = {
    userName: ''
  }
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        this
          .props
          .onSubmit(resp.data);
        this.setState({userName: ''});
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({userName: event.target.value})}
          placeholder="Github username"
          required/>
        <button type="submit">Add card</button>
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    cards: []
  }

  addNewCard = (cardInfo) => {
    this.setState(prevState => ({
      cards: prevState
        .cards
        .concat(cardInfo)
    }));
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards}/>
      </div>
    );
  }
}
export default App;

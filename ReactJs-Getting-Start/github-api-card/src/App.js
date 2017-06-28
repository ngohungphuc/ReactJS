import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
        .map(card => <Card {...card}/>)}
    </div>
  );
}

export default CardList;

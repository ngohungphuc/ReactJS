import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let data = [
  {
    name: "Tony Hudson",
    avatar_url: "https://avatars0.githubusercontent.com/u/13591213?v=3",
    company: "Nash Tech"
  }
]

ReactDOM.render(<CardList cards={data}/>, document.getElementById('root'));
registerServiceWorker();

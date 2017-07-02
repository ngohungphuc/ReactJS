import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Quiz/>, document.getElementById('root'));
registerServiceWorker();

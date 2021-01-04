import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import './index.css';

import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <React.StrictMode>
    <div className="container">
      <h1>React Calculator</h1>
      <Calculator />
      <h3><a href="https://github.com/pistorio3" target="_blank" rel="noreferrer">Pistório</a></h3>
      <FontAwesomeIcon icon={faReact} size="lg"/>
    </div>
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();

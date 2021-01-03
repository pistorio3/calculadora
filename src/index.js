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
      <h3>Pistório</h3>
      <FontAwesomeIcon icon={faReact} size="lg"/>
    </div>
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();

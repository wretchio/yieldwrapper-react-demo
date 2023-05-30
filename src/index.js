import React from 'react';
import ReactDOM from 'react-dom';

import { Link, BrowserRouter } from 'react-router-dom';

import Router from './router';

ReactDOM.render(
  <BrowserRouter>
    <ul>
      <li style={{ display: 'inline', padding: '1em' }}>
        <Link to="/">START</Link>
      </li>
      <li style={{ display: 'inline', padding: '1em' }}>
        <Link to="/dynamic">DYNAMIC</Link>
      </li>
    </ul>
    <Router />
  </BrowserRouter>,
  document.getElementById('root')
);

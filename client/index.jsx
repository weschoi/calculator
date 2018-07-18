import React from 'react';
import ReactDOM from 'react-dom';
import { Mobile, Desktop, Physical } from './components';

ReactDOM.render(
  <div className="row no-gutters">
    <Mobile />
    <Desktop />
    <Physical />
  </div>, 
  document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Physical, Mobile, Desktop } from './components';

ReactDOM.render(
  <div className="row no-gutters">
    <Physical />
    <Mobile />
    <Desktop />
  </div>, 
  document.getElementById('app'));
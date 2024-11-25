import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/buttons.css'
import './styles/layout.css'
import RoutingLayer from './AuthLayer';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <RoutingLayer />
  </BrowserRouter>
);
import React from 'react';
import ReactDOM from 'react-dom';
import Page from './pages/Page'
import './index.css';

function App() {
  return (
      <Page/>
  );
}



ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
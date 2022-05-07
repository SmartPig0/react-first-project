import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './hello.css';
import App from './App';
import Calc from './Calc';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Calc />
  </React.StrictMode>
);

/*const calc = ReactDOM.createRoot(document.getElementById('calc'));
root.render(
  <React.StrictMode>
    <Calc />
  </React.StrictMode>
);*/

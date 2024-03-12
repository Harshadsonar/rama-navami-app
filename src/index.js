import React from 'react';
import ReactDOM from 'react-dom/client'; // Assuming using ReactDOM v18
import './index.css';
import App from './App'; // Import your main App component
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <BrowserRouter> {/* Wrap your App here */}
      <App />
    </BrowserRouter>
  </React.Fragment>
);
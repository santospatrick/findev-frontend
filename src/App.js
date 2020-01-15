import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './services/api';

function App() {
  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('devs');
      console.log('response:', response.data);
    }

    loadDevs();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

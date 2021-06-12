import logo from './logo.svg';
import './App.css';
import React from 'react';

export class App extends React.Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Mi Proyecto React</h1>
          <p>Mis primeros pasos con react. Excelente</p>
          <a href="http://www.nextu.com" target="_blank">
            Página de NextU
          </a>
        </header>
      </div>
    );
  };
};

export default App;

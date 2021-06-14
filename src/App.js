import logo from './logo.svg';
import './App.css';
import React from 'react';
import "../node_modules/font-awesome/css/font-awesome.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
export class App extends React.Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Mi Proyecto React</h1>
          <p>Mis primeros pasos con react. Excelente</p>
          <a href="http://www.nextu.com" target="_blank" rel="noreferrer">
            Página de NextU
          </a>
        </header>
      <div class='border rounded login m-5 container'>
      <h2>Ingreso</h2>
      <form>
        <div class="input-group pb-3">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-envelope-o fa-fw"></i></span>
          </div>
          <input class="form-control" type="text" placeholder="Correo Electrónico"/>
        </div>
        <div class="input-group pb-3">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fa fa-key fa-fw"></i></span>
          </div>
          <input class="form-control" type="password" placeholder="Contraseña"/>
            </div>
            <button type="submit" class="btn btn-success m-2" onclick="return validar(this.form)">Continuar</button>
      </form>
      </div>
      </div>
    );
  };
};



export default App;

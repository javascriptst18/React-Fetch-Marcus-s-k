import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FetchAjax from './components/FetchAjax';
import Button from './components/Button';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Button name="Filter"/>
        <FetchAjax />
      </div>
    );
  }
}

export default App;

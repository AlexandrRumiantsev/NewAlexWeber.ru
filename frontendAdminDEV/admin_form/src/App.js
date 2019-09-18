import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="Admin-panel">
            <img src={logo} className="App-logo" alt="logo" />
            <span className='Title-span'>Административная панель</span>
             <a href='#' className='Menu-item'>Проекты</a>
      </header>
    </div>
  );
}

export default App;

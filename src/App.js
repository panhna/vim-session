import React from 'react';
import logo from './vim-logo.svg';
import './App.css';
import VimBenefit from './comp/vim-benefit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>VIM - Advance TextEditor</h1>
        <VimBenefit />
        <a
          className="App-link"
          href="https://www.vim.org/"
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

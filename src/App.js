import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayTable from "./components/displayTable"
import InsertData from './components/insertData'

function App() {
  return (
    <>
      <DisplayTable/>
      <InsertData/>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

  );
}

export default App;

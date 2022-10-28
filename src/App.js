import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayTable from './components/displayTable'
import InsertData from './components/insertData'
import Login from './components/Login'

function App() {
  return (
    <>
      <DisplayTable/>
      <InsertData/>
    </>
  );
}

export default App;

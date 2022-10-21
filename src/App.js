import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayTable from './components/displayTable'
import InsertData from './components/insertData'

function App() {
  return (
    <>
      <DisplayTable/>
      <InsertData/>
    </>
  );
}

export default App;

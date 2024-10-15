import React, { useState } from 'react';
import './App.css';
import AddDocument from './addDocument';
import ShowDocuments from './showDocuments';

function App() {
  return (
    <div className="App">
       <h1>Advanced Databases JS Application</h1>
      <AddDocument />
      <ShowDocuments/>
    </div>
  );
}

export default App;
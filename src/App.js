import React, { useState } from 'react';
import './App.css';
import AddDocument from './addDocument';
import UpdateDocument from './updateDocument';
import DeleteDocument from './deleteDocument';
//import ShowDocuments from './showDocuments';

function App() {
  return (
    <div className="App">
       <h1>Advanced Databases JS Application</h1>
      <AddDocument />
      <UpdateDocument/>
      <DeleteDocument/>
      
    </div>
  );
}

export default App;
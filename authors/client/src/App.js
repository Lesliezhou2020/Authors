import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import './App.css';
import Update from './views/Update';
import AuthorForm from './components/AuthorForm';

function App() {
  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Router>
        <Main path="/" />
        <Detail path="/new" />
        <Update path="/edit/:id" />
      </Router>
      
      
    </div>
  );
}

export default App;

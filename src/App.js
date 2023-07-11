import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Contacts from './components/Contacts';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={() => <Contacts/>}>       
        </Route>
        <Route path='/add' Component={() => <Form/>}>                   
        </Route>
      </Routes>      
    </div>
  );
}

export default App;

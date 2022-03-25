import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';


function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<NoteList/>}/>
        <Route path="/edit/:id" element={<CreateNote/>}/>
        <Route path="/create" element={<CreateNote/>}/>
        <Route path="/user" element={<CreateUser/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import List from './pages/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/list/:assetLabel' element={<List/>} />
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

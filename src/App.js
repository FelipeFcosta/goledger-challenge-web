import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import List from './pages/List';
import Navbar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/list/:assetLabel' element={
        <div>
          <Navbar/>
          <List/>
        </div>
        }>
        </Route>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

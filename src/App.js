import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import List from './pages/List';
import Navbar from './components/NavBar';


const modalStyle = {
  content: {
    top: '50%', left: '50%', right: 'auto', bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '400px',
    borderRadius: '8px'
  },
  overlay: {
    zIndex: 4,
    backgroundColor: "#000b"
  }
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/list/:assetLabel' element={
          <div>
            <Navbar modalStyle={modalStyle}/>
            <List modalStyle={modalStyle}/>
          </div>
        }>
        </Route>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

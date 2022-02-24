import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import List from './pages/List';
import Navbar from './components/NavBar';
import AssetListContext from './contexts/asset_list_context';
import LoadingContext from './contexts/loading_context';


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
  const [assetList, setAssetList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  return (
    <AssetListContext.Provider value={{assetList, setAssetList}}>
      <LoadingContext.Provider value={{isLoading, setIsLoading}}>
        <BrowserRouter>
          <Routes>
            <Route path='/list/:assetLabel/search/:searchTerm' element={<>
              <Navbar modalStyle={modalStyle}/>
              <List modalStyle={modalStyle}/>
            </>}></Route>
            <Route path='/list/:assetLabel/' element={<>
              <Navbar modalStyle={modalStyle}/>
              <List modalStyle={modalStyle}/>
            </>}></Route>
            <Route exact path='/' element={<Home/>}/>
          </Routes>
        </BrowserRouter>
      </LoadingContext.Provider>
    </AssetListContext.Provider>
  )
}

export default App;

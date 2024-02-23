//import './App.css'
import './index.css';

//import React from 'react'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import { Main } from './pages/main';
import { Login } from './pages/login';
import { Navbar } from './pages/navbar';
import { Store } from './pages/store';
import { Dashboard } from './pages/dashboard';
import { Review } from './pages/review';
import { Intro } from './pages/intro';
import { ShoppingCartProvider } from './context/ShoppingCartContext';


function App() {
  return (
    
    <Router>

    <div className='App'>
  

      <ShoppingCartProvider>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/store' element={<Store/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/' element={<Intro/>}/>

        </Routes>
      </ShoppingCartProvider>


      

    </div>

    </Router>
  )
}

export default App;
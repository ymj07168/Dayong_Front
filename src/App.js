
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Main from './routes/Main';
import Loginpage from './routes/Login';
import Joinpage from './routes/Join';
import Menu from './routes/Menu';
import Option from './routes/Option.js';
import Order from './routes/Order.js';

function App() {




  return (

    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/main' element={<Main />}/>
          <Route path='/login' element={<Loginpage />}/>
          <Route path='/join' element={<Joinpage />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/option/:menuname' element={<Option />}/>
          <Route path='/order' element={<Order />}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
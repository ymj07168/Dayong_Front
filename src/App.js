
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Main from './routes/Main';
import Loginpage from './routes/Loginpage';
import Joinpage from './routes/Joinpage';
import Menu from './routes/Menu';
import Option from './routes/Option.js';

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

        </Routes>
      </Router>
    </>
  );
}

export default App;
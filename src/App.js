import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './routes/Main';

function App() {
  return (

    <>
      <Router>
        <Routes>
          <Route path='/' exact />
          <Route path='/main' element={<Main />} exact />
          <Route path='/login' exact />
          <Route path='/join' exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
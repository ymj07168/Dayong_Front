import Home from "./routes/Home.js";
import Menu from "./routes/Menu.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Join from "./routes/Joinpage.js";
import Login from "./components/Login.js";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
      
      </Routes>
    </Router>

  );
}

export default App;

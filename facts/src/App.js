import React, {useState,useEffect} from 'react';
import { Redirect } from 'react-router';
import  Axios  from 'axios';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes,useNavigate} from 'react-router-dom';
import {Link, Outlet} from 'react-router-dom';


import Facts from './components/facts';
import Anime from './components/Anime/anime';
import Quotes from './components/Quotes/Quotes';
import Home from './components/Home/home';


function App() {

  return (
    <div className="App">



<Router>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/anime" element={<Anime/>}></Route>
          <Route path="/facts" element={<Facts/>} ></Route>
          <Route path="/quotes" element={<Quotes/>} ></Route>
        </Routes>
      </Router>




</div>



  );
}

export default App;

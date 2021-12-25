import React, {useState,useEffect} from 'react';
import { Redirect } from 'react-router';
import  Axios  from 'axios';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes,useNavigate} from 'react-router-dom';
import {Link, Outlet} from 'react-router-dom';





function App() {

  return (
    <div className="App">



<div>
  <h1>Hello</h1>
  <button ><Link to='/anime'>Anime</Link></button>
  <button ><Link to='/facts'>Facts</Link></button>
  <button ><Link to='/quotes'>Quotes</Link></button>

  
  <Outlet />

</div>

</div>



  );
}

export default App;

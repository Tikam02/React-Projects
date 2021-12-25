import React, {useState,useEffect} from 'react';
import  Axios  from 'axios';
import axios from 'axios';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


// axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';





function App() {
  const [qoutes, setQoutes] = useState([]);
  const [rsqoutes, setRSQoutes] = useState([]);
  const [anqoutes, setAnQoutes] = useState([]);
  const [ancquotes, setANCQoutes] = useState([]);






var qurl = `https://api.quotable.io/random`;
var rsurl =  `https://ron-swanson-quotes.herokuapp.com/v2/quotes`;
var aurl = `https://animechan.vercel.app/api/random`;





// fetch the data

const getQoutes = async () => {
  const {data} = await Axios.get(qurl);
  setQoutes(data);
}

const getRSQoutes = async () => {
  const {data} = await axios.get(rsurl);
  setRSQoutes(data);
}



const getAnimeQoutes = async () => {
  const {data} = await axios.get(aurl);
  setAnQoutes(data);
}





// Trigger the getFacts after the initial render by using the useEffect hook
useEffect( () => {
  getQoutes();
  getRSQoutes();
  getAnimeQoutes();
},[]);






  return (
    <div className="App">







<div className='contents'>

<div className='rq_card'>


<h1 className='header'>Random Quotes</h1>
<p className='texts' >{qoutes.content}</p>
<h4 className='author'>Author : {qoutes.author}</h4>

</div>

<div className='rs_card'>


<h1 className='header'>Ron Swanon Quotes</h1>
<p className='texts' >{rsqoutes}</p>

</div>

<div className='anime_card'>

<h1 className='header'>Anime Quotes</h1>
<p className='texts' >{anqoutes.quote}</p>
<h4 className='source'>Anime : {anqoutes.anime}</h4>
<h4>character: {anqoutes.character}</h4>
</div>
    

</div>

<div>
<p>{ancquotes.anime}</p>
<p>{ancquotes.character}</p>


</div>
</div>



  );
}

export default App;

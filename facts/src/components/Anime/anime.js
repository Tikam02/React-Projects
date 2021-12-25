
import React, {useState,useEffect} from 'react';
import  Axios  from 'axios';
import axios from 'axios';
import { BrowserRouter, Route, Routes} from 'react-router-dom';




function App() {
  // const [loading, setLoading] = useState(true);
  const [anqoutes, setAnQoutes] = useState([]);
  const [query, setQuery] = useState("");
  const [ancquotes, setANCQoutes] = useState([]);





var aurl = `https://animechan.vercel.app/api/random`;
var anime_url = `https://animechan.vercel.app/api/quotes/character?name=${query}`;




// fetch the data




const getAnimeQoutes = async () => {
  const {data} = await axios.get(aurl);
  setAnQoutes(data);
}


const getANCQoutes = async () => {
  const {data} = await axios.get(anime_url);
  setANCQoutes(data.anime);
}

const onSubmit= (e) => {
  e.preventDefault();
  getANCQoutes();
};



// Trigger the getFacts after the initial render by using the useEffect hook
useEffect( () => {
  getAnimeQoutes();
},[]);






  return (
    <div className="App">



{/* <BrowserRouter>
        <Routes>
          <Route path="/manatee" element={<Manatee/>}></Route>
          <Route path="/facts" element={<Facts/>} ></Route>
          <Route path="/quotes" element={<Quotes/>} ></Route>
        </Routes>
      </BrowserRouter> */}

<form className='app_SearchForm' onSubmit={onSubmit}>
    <input className='app_input' type="text" placeholder='Enter Character Name' value={query} onChange={(e) => setQuery(e.target.value)}/>
    <input className='app_SearchBtn' type="submit" value="Search" />
</form>



<div className='contents'>


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

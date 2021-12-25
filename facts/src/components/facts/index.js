import React, {useState,useEffect} from 'react';
import  Axios  from 'axios';
import './index.css';
import axios from 'axios';



export default function Index() 
  {
  // const [loading, setLoading] = useState(true);
  const [facts, setFacts] = useState([]);
  const [catf, setCatf] = useState([]);

var url = `https://uselessfacts.jsph.pl/random.json?language=en`;
var curl = `https://catfact.ninja/fact`;



// fetch the data
const getFacts = async () => {
  const {data} = await Axios.get(url);
  setFacts(data);
};

const getCatFacts = async () => {
  const {data} = await Axios.get(curl);
  setCatf(data);
}

// Trigger the getFacts after the initial render by using the useEffect hook
useEffect( () => {
  getFacts();
  getCatFacts();

},[]);



  return (
    <div className="App">
 



<div className='contents'>


<div className='cards'>
<h1 className='header'>Random facts</h1>
 <p className='texts' >{facts.text}</p>
</div>


<div className='cat_card'>
<h1 className='header'>Cat Facts</h1>
<p className='texts' >{catf.fact}</p>
</div>



</div>
</div>


  );
}


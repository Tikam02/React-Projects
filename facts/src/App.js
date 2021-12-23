import React, {useState,useEffect, createFactory} from 'react';
import  Axios  from 'axios';
import './App.css';






function App() {
  // const [loading, setLoading] = useState(true);
  const [facts, setFacts] = useState([]);
  const [catf, setCatf] = useState([]);
  const [qoutes, setQoutes] = useState([]);


var url = `https://uselessfacts.jsph.pl/random.json?language=en`;
var curl = `https://catfact.ninja/fact`
var qurl = `https://api.quotable.io/random`;


// fetch the data

const getFacts = async () => {
  const {data} = await Axios.get(url);
  setFacts(data);
};

const getCatFacts = async () => {
  const {data} = await Axios.get(curl);
  setCatf(data);
}

const getQoutes = async () => {
  const {data} = await Axios.get(qurl);
  setQoutes(data);
}

// Trigger the getFacts after the initial render by using the useEffect hook
useEffect( () => {
  getFacts();
  getCatFacts();
  getQoutes();
},[]);






  return (
    <div className="App">
 

<h1>Random facts</h1>
 <p >{facts.text}</p>


<h1>Cat Facts</h1>
<p>{catf.fact}</p>

<h1>Random Qoutes</h1>
<p>{qoutes.content}</p>

<h1>Random jokes</h1>
{/* <p>{catf.fact}</p> */}

    </div>
  );
}

export default App;

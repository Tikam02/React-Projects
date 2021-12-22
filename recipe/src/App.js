import './App.css';
import './key'
import Axios from "axios"
import React,{useState} from 'react';
import RecipeTile from './RecipeTile';


function App() {

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthlabel, setHealthLabel] = useState("vegan")
 

var url = `https://api.edamam.com/search?q=${query}&app_id=3903a16e&app_key=a351922172973bc9f6c088e6b316ee11&health=${healthlabel}`;
async function getRecipe() {
  var result = await Axios.get(url);
  setRecipes(result.data.hits)
  console.log(result.data);
}

const onSubmit= (e) => {
  e.preventDefault();
  getRecipe();
};

  return (
    <div className="app">
      <h1 >Food Recipe Plaza 🍔</h1>
      <form className='app_SearchForm' onSubmit={onSubmit}>
        <input className='app_input' type="text" placeholder='Enter Indigrient' value={query} onChange={(e) => setQuery(e.target.value)} />
        <input className='app_SearchBtn' type="submit" value="Search" />
        <select className='app_healthlabels' >
          <option onClick={() => setHealthLabel("vegan")}>Vegan</option>
          <option onClick={() => setHealthLabel("Vegetarian")}>Vegetarian</option>
          <option onClick={() => setHealthLabel("Alcohol-Free")}>Alcohol-Free</option>
          <option onClick={() => setHealthLabel("Dairy-Free	")}>Dairy-Free	</option>
          <option onClick={() => setHealthLabel("Egg-Free	")}>Egg-Free	</option>

        </select>
      </form>

      <div className='app_recipes'>
        {recipes.map((recipe) => {
         return <RecipeTile recipe={recipe}/>;
        })}
      </div>
    </div>
  );
}

export default App;

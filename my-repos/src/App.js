import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';
import List from './components/List';
import WithListLoading from './components/withListLoading';


function App() {
  const ListLoding = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });



 // Using Fetch Method
  // useEffect ( () =>{
  //   setAppState({loading: true});
  //   const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((repos) => {
  //       setAppState({ loading: false, repos: repos });
  //     });

  // },[setAppState]);



/// Using Axios

useEffect ( () => {
  setAppState({isLoading: true});
  const apiUrl = 'https://api.github.com/users/Tikam02/repos';
  axios.get(apiUrl).then((repos)=>{
    const allRepos = repos.data;
    setAppState({loading: false, repos: allRepos});
  });
},[setAppState]);






















  return (
    <div className="App">
        <div className='App'>
          <div className='container'>
            <h1>My Repositories</h1>
          </div>
        </div>
        <div className='repo-container'>
          <ListLoding isLoading={appState.loading} repos={appState.repos}/>

        </div>
        <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Shedrack Akintayo
        </div>
        </footer>
    </div>
  );
}

export default App;

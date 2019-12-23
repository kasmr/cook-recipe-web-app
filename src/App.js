import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
  const APP_ID = 'cc7f7844';
  const APP_KEY = '2c6d67825a334987eb8084f02ded183f';

  const [recipes, setRecipes] = useState([]);

  useEffect(() => getRecipes(), []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type='text' />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      {recipes.map(recipes => (
        <Recipe />
      ))}
    </div>
  );
}

export default App;

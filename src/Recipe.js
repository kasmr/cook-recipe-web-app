import React from 'react';
import style from './scss/recipe.scss';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className='recipe'>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>
        Amount of Calories: <span>{calories}</span> per serving
      </p>
      <img src={image} alt='' />
    </div>
  );
};

export default Recipe;

import React from 'react';
import style from './scss/recipe.scss';

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  healthLabels,
  dietLabels
}) => {
  return (
    <div className='recipe'>
      <h1>{title}</h1>
      <p>{dietLabels}</p>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>
        Amount of Calories: <span>{calories}</span> per serving
      </p>
      <img src={image} alt='' />
      <p>#{healthLabels.toString()}</p>
    </div>
  );
};

export default Recipe;

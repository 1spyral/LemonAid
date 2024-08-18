import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeListItem from './RecipeListItem';

const RecipeList = () => {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([])

  useEffect(()=>{
    fetch(`http://127.0.0.1:5000/api/get_recipes`, {
        method: "GET", 
    }).then((response)=>{
        console.log(response);
        return response.json();
    }).then((value)=>{
        const recipesArray = Object.values(value["recipes"]); 
        console.log(recipesArray);
        setRecipes(recipesArray);
    }).catch((error)=>{
        console.error("Fetch error: ", error);
    });
  }, []);

  const regenerateRecipes = () => {
    fetch(`http://127.0.0.1:5000/api/generate_recipes`, {
        method: "GET", 
    }).then((response)=>{
        console.log(response);
        return response.json();
    }).then((value)=>{
        const recipesArray = Object.values(value["recipes"]); 
        console.log(recipesArray);
        setRecipes(recipesArray);
    }).catch((error)=>{
        console.error("Fetch error: ", error);
    });
  }

  return (
    <>
        <ul className="w-screen">
            {recipes.map((val, key) => {
              return (
                <RecipeListItem
                key={key}
                imageURL={val.image}
                name={val.name}
                />
              );
            })}
            <button onClick={() => regenerateRecipes()} className="items-center p-4 ml-5 mt-2 rounded-lg bg-bittersweet">
                More Recipes
            </button>
        </ul>
    </>
  );
};

export default RecipeList;

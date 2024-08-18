import React, {Component, useEffect, useState} from 'react';
import Header from './Header'; 

function Recipes() {
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
            console.log(reponse);
            return response.json();
        }).then((value)=>{
            const recipesArray = Object.values(value["recipes"]); 
            console.log(recipesArray);
            setRecipes(recipesArray);
        }).catch((error)=>{
            console.error("Fetch error: ", error);
        });
    };

    return(
        <div>
            <Header />
        </div>
    )
}

export default Recipes;
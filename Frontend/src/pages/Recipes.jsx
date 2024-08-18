import React, {Component, useEffect, useState} from 'react';
import Header from './Header'; 
import { useNavigate } from 'react-router-dom';

function Recipes() {
    const [recipes, setRecipes] = useState([])
    const navigate = useNavigate();

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

    return(
        <>
            <div>
                <Header />
            </div>
            <div className="flex justify-left items-center ml-8 mt-8 mb-2">
                <button onClick={() => navigate('/')}>
                    <img src = "../src/assets/back button2.png" width={20} height={20}/>
                </button>
            </div>
            <div>
                {recipes.map((val, key) => {
                    key = {key};
                    const imageUrl = val.image;
                    const name = val.name;
                    const ingredients = val.ingredients;
                    const instructions = val.instructions;
                    return (
                        <div className="flex">
                            <div className="w-1/3 h-3/4 p-10 m-5 rounded-3xl bg-raspberry">
                                <img src={imageUrl} alt="Image of Food" className="rounded-2xl"/>
                                <ul className="mt-5 ml-5 list-disc text-2xl text-baby-powder">
                                    {Object.entries(ingredients).map(([ingredient, quantity], i) => (
                                        <li key={i}>
                                            {ingredient}: {quantity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="text-6xl m-12 text-chocolate-cosmos">
                                <h1>{name}</h1>
                                <ul className="text-3xl mt-12">
                                    {instructions?.map((step) => (
                                        <li className="m-6">{step}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default Recipes;
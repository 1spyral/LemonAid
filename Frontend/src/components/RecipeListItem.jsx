import React from 'react';
import { useNavigate } from 'react-router-dom';


const RecipeListItem = ({imageURL, name}) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("../Recipes")} className="w-full">
      <li className="flex items-top p-4 m-5 h-44 justify-between rounded-lg bg-raspberry font-lilita">
          <img 
              src={imageURL}
              alt={name}
              className="w-36 h-36 rounded-md object-cover"
          />
          <span className="text-2xl font-normal text-baby-powder">{name}</span>
      </li>
    </button>
  );
};

export default RecipeListItem;
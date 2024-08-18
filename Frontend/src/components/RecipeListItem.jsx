import React from 'react';

const RecipeListItem = ({imageURL, name}) => {
  return (
    <li className="flex items-top p-4 m-5 h-44 justify-between rounded-lg bg-raspberry">
        <img 
            src={imageURL}
            alt={name}
            className="w-36 h-36 rounded-md object-cover"
        />
        <span className="ml-5 text-2xl font-normal text-baby-powder">{name}</span>
    </li>
  );
};

export default RecipeListItem;
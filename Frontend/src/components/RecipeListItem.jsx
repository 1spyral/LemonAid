import React from 'react';

const RecipeListItem = ({imageURL, name}) => {
  return (
    <li className="flex items-center p-4 m-5 justify-between rounded-lg bg-raspberry">
        <img 
            src={imageURL}
            alt={name}
            className="w-12 h-12 rounded-md object-cover"
        />
        <span className="text-lg font-medium">{name}</span>
    </li>
  );
};

export default RecipeListItem;
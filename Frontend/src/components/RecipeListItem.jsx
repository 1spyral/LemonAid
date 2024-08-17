import React from 'react';

const RecipeListItem = ({imageURL, name}) => {
  return (
    <li className="flex items-center p-4 rounded-lg bg-baby-powder">
        <img 
            src={imageURL}
            alt={name}
            className="w-12 h-12 rounded-md object-cover mr-4"
        />
        <span className="text-lg font-medium">{name}</span>
    </li>
  );
};

export default RecipeListItem;
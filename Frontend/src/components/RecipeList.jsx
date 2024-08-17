import React, { useState } from 'react';
import RecipeListItem from './RecipeListItem';

const RecipeList = () => {
  const [items, setItems] = useState([
    { id: 1, imageURL: '../assets/scan icon.png', name: 'Example1' },
    { id: 2, imageURL: '../assets/scan icon.png', name: 'Example2' },
    { id: 3, imageURL: '../assets/scan icon.png', name: 'Example3' }
  ]);

  return (
    <>
        <ul className="list-none">
            {items.map((item) => (
                <RecipeListItem
                key={item.id}
                imageURL={item.imageURL}
                name={item.name}
                />
            ))}
        </ul>
    </>
  );
};

export default RecipeList;

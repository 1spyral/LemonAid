import React, { useState } from 'react';
import FoodListItem from './FoodListItem';
import { useNavigate } from 'react-router-dom';


const FoodList = () => {
  const [items, setItems] = useState([
    { id: 1, leftText: 'Carrot', rightText: 'Expiration' },
    { id: 2, leftText: 'Carrot', rightText: 'Expiration' },
    { id: 3, leftText: 'Carrot', rightText: 'Expiration' },
    { id: 4, leftText: 'Carrot', rightText: 'Expiration' },
    { id: 5, leftText: 'Carrot', rightText: 'Expiration' },
    { id: 6, leftText: 'Carrot', rightText: 'Expiration' },
    { id: 7, leftText: 'Carrot', rightText: 'Expiration' },
    { id: 8, leftText: 'Carrot', rightText: 'Expiration' },
    { id: 9, leftText: 'Carrot', rightText: 'Expiration' },
    { id: 10, leftText: 'Carrot', rightText: 'Expiration' },
    { id: 11, leftText: 'Carrot', rightText: 'Expiration' },
    { id: 12, leftText: 'Carrot', rightText: 'Expiration' },
    { id: 13, leftText: 'Carrot', rightText: 'Expiration' }
  ]);

  const navigate = useNavigate();

  return (
    <>
    <button onClick={() => navigate('../food-inventory')}>
        <h1 className="flex w-auto h-auto m-3 p-2 text-2xl">
            Expiring Soon
        </h1>
        </button>
        <ul className="list-none">
        {items.map((item) => (
            <FoodListItem
            key={item.id}
            leftText={item.leftText}
            rightText={item.rightText}
            />
        ))}
        </ul>
    </>
  );
};

export default FoodList;

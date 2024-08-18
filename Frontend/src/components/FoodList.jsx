import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const FoodList = () => {

  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const currentSorting = "Expiry Date (Earliest)";

  useEffect(()=>{
    fetch(`http://127.0.0.1:5000/api/view_all_items?sort_method=0`, {
        method: "GET", 
    }).then((raw)=>{
        console.log(raw);
        return raw.json();
    }).then((value)=>{
        const itemsArray = Object.values(value["items"]); 
        console.log(itemsArray);
        setItems(itemsArray);
    }).catch((error)=>{
        console.error("Fetch error: ", error);
    });
  }, []); 

  return (
    <>
      <button onClick={() => navigate('../food-inventory')}>
          <h1 className="flex w-auto h-auto m-3 p-2 text-2xl">
              Expiring Soon
          </h1>
      </button>
      <ul className="overflow-y-auto">
        {items.slice(0, 10).map((val, key) => {
          return (
              <li key={key} className="flex bg-baby-powder justify-between m-2 rounded-lg">
                  <span className="px-4 py-2 text-left">{val.name}</span>
                  <span className="px-4 py-2 text-right">{val.expiry}</span>
              </li>
          );
        })}
      </ul>
    </>
  );
};

export default FoodList;

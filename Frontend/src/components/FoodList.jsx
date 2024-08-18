import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles.css';


const FoodList = () => {

  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const currentSorting = "Expiry Date (Earliest)";

  const singleDelete = (newid) => {
    fetch(`http://127.0.0.1:5000/api/delete_item?id=${newid}`, {
        method: "DELETE",
    })
    .then((response) => {
        if (response.ok) {
            const newArr = items.filter((item) => item.id !== newid);
            setItems(newArr);
        } else {
            console.error("Failed to delete item");
        }
    })
    .catch((error) => {
        console.error("Fetch error: ", error);
    });
};


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
      
      <div className="flex justify-between w-full h-auto m-3 p-2 text-2xl">
        <span className="text-left text-maroon font-lilita text-3xl">Expiring Soon</span>
        <button onClick={() => navigate('../food-inventory')}>
          <span className="text-right ml-auto mr-4 text-maroon hover:text-hot-pink font-delius">View All &gt;</span>
        </button>
      </div>
      

      <ul className="overflow-y-auto">
        {items.slice(0, 10).map((val, key) => {
          return (
              <li key={key} className="flex bg-baby-powder justify-between m-2 rounded-lg">
                  <span className="px-4 py-2 text-left text-maroon font-delius">{val.name}</span>
                  <span className="px-10 py-2 text-right ml-auto text-maroon font-delius">{val.expiry}</span>
                  <div className="px-0 text-right text-chocolate-cosmos" onClick={ () => singleDelete(val.id) }>
                  <img src="../src/assets/trash.png" width={20} height={20} onMouseOver={e => (e.currentTarget.src = "../src/assets/trash-lid-open.png")} onMouseOut={e => (e.currentTarget.src = "../src/assets/trash.png") } className = "hover:cursor-pointer mt-3 mr-3 hover:w-5 hover:h-6"/>
                  </div>

              </li>
          );
        })}
      </ul>
    </>
  );
};

export default FoodList;

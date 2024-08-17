import React, {Component, useEffect, useState} from 'react';
import Header from './Header'; 
import BackButton from '../components/BackButton'; 
import { useNavigate } from 'react-router-dom';



const data = [
    { name: "carrot", expiry: "2024-08-17" },
    { name: "apple", expiry: "2024-08-20" },
    { name: "pear", expiry: "2024-08-25" },
    { name: "pear", expiry: "2024-08-25" },
    { name: "apple", expiry: "2024-08-20" },
    { name: "pear", expiry: "2024-08-25" },
    { name: "pear", expiry: "2024-08-25" },
    { name: "apple", expiry: "2024-08-20" },
    { name: "pear", expiry: "2024-08-25" },
    { name: "pear", expiry: "2024-08-25" },
    { name: "apple", expiry: "2024-08-20" },
    { name: "pear", expiry: "2024-08-25" },
    { name: "pear", expiry: "2024-08-25" },
    { name: "apple", expiry: "2024-08-20" },
    { name: "pear", expiry: "2024-08-25" },
    { name: "pear", expiry: "2024-08-25" },
];


const sortingOptions = ["Expiry Date (Earliest)", "Expiry Date (Latest)", "Name (Ascending)", "Name (Descending)"]


function Foods() {
    const navigate = useNavigate(); 

    const [items, setItems] = useState([])
    const [currentSorting, setCurrentSorting] = useState(0);

    const changeSorting = (sortingChoice) => {
        setCurrentSorting(sortingChoice); 

        updateFoodsOrder(sortingChoice); 
    };

    useEffect(()=>{
        fetch(`http://127.0.0.1:5000/api/view_all_items?sort_method=${currentSorting}`, {
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

    //items-center

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

    const updateFoodsOrder = (sort_method) => {
        fetch(`http://127.0.0.1:5000/api/view_all_items?sort_method=${sort_method}`, {
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
    }



    return (
        <div>
            <Header />
        <div className="bg-off-white min-h-screen flex justify-center">
            <div className="bg-yellow-orange rounded-lg shadow-lg p-8 w-5/6 my-12">
                <div className="flex justify-left items-center mb-4">
                    <button onClick={() => navigate('/')}>
                        <img src = "../src/assets/back button.png" width={30} height={30}/>
                    </button>
                    <h1 className="text-off-white text-xl font-semibold">{sortingOptions[currentSorting]}</h1>
                </div>

                <div className="flex">
                    {/* Table Section */}
                    <div className="w-3/4">
                        <div className="bg-off-white w-full flex justify-center items-center rounded-lg">
                            <table className="w-full my-2 border-yellow-orange border-separate divide-solid divide-y-8">
                                <tbody className="max-h-[300px] overflow-y-auto divide-y-8 divide-yellow-orange divide-solid">
                                    {items.map((val, key) => {
                                        return (
                                            <tr key={key} className="bg-off-white">
                                                <td className="px-4 py-2 text-left">{val.name}</td>
                                                <td className="px-12 py-2 text-right">{val.expiry}</td>
                                                <td className="px-0 text-right text-chocolate-cosmos" onClick={ () => singleDelete(val.id) }>
                                                    <img src="../src/assets/trash.png" width={20} height={20} className = "hover:cursor-pointer"/>

                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    
                        {/* Sort By Section */}
                        <div className="w-1/4 pl-4">
                            <div className="bg-off-white rounded-lg shadow p-4">
                                <h2 className="text-center text-maroon mb-2 font-semibold">Sort By</h2>
                                <ul className="text-maroon space-y-2 text-sm">
                                    {sortingOptions.map((val, key) => {
                                        return (
                                            <li key={key} className="bg-off-white">
                                                <h2 className="px-4 py-2 text-left cursor-pointer hover:underline" onClick={() => changeSorting(key)}>{val}</h2>
                                            </li>
                                        );
                                    })}                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Foods;

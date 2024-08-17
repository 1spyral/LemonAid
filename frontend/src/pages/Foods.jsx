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

const currentSorting = "Expiry Date (Earliest)";

function Foods() {
    const navigate = useNavigate(); 
    
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch("http://127.0.0.1:5000/api/view_all_items", {
            method: "GET", 
        }).then((raw)=>{
            console.log(raw);
            return raw.json();
        }).then((value)=>{
            const itemsArray = Object.values(value["items"]); 
            console.log(itemsArray);
            setItems(itemsArray);
            //console.log(value["items"]);
            //setItems(value["items"]);
            //console.log(value); 
        }).catch((error)=>{
            console.error("Fetch error: ", error);
        });
    }, []); 

    //items-center

    return (
        <div>
            <Header />
        <div className="bg-off-white min-h-screen flex justify-center">
            <div className="bg-yellow-orange rounded-lg shadow-lg p-8 w-5/6 my-12">
                <div className="flex justify-left items-center mb-4">
                    <button onClick={() => navigate('/')}>
                        <img src = "../src/assets/back button.png" width={30} height={30}/>
                    </button>
                    <h1 className="text-off-white text-xl font-semibold">{currentSorting}</h1>
                </div>

                <div className="flex">
                    {/* Table Section */}
                    <div className="w-3/4">
                        <div className="bg-off-white w-full flex justify-center items-center rounded-lg">
                            <table className="w-full my-2 border-yellow-orange border-separate divide-solid divide-y-8">
                                <tbody className="max-h-[300px] overflow-y-auto divide-y-8 divide-yellow-orange divide-solid">
                                    {items.map((val, key) => {
                                        return (
                                            <div className='border-y-20 border-yellow-orange rounded-md mx-0'>
                                                <tr key={key} className="bg-off-white">
                                                    <td className="px-4 py-2 text-left">{val.name}</td>
                                                    <td className="px-4 py-2 text-right">{val.expiry}</td>
                                                </tr>
                                            </div>
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
                                    <li className="cursor-pointer hover:underline">Expiry Date (Earliest)</li>
                                    <li className="cursor-pointer hover:underline">Expiry Date (Latest)</li>
                                    <li className="cursor-pointer hover:underline">Name (Ascending)</li>
                                    <li className="cursor-pointer hover:underline">Name (Descending)</li>
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

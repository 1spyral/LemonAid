import React from 'react';
import { useNavigate } from 'react-router-dom';



const AddInventoryButton = () => {
    const navigate = useNavigate();
    return(
        <>
        <button className="flex flex-col justify-center items-center p-0 w-screen h-72 " onClick={() => navigate('../scan-foods')}>
            <p className="py-5 text-off-white text-3xl">Add Item</p>
            <img src="../src/assets/add-item-icon.png" alt="upload" className=" w-52 h-50 p-0"/>
        </button>
        </>
    );
}

export default AddInventoryButton;
import React from 'react';
import { useNavigate } from 'react-router-dom';



const AddInventoryButton = () => {
    const navigate = useNavigate();
    return(
        <>
        <button className="flex flex-col justify-center items-center p-0 w-screen h-72 hover:bg-salmon rounded-xl" onClick={() => navigate('../scan-foods')}>
            <img src="../src/assets/add-item-icon.png" alt="upload" className=" w-52 h-50 p-0"/>
            <p className="py-5 text-off-white text-4xl font-lilita">Add Item</p>
        </button>
        </>
    );
}

export default AddInventoryButton;
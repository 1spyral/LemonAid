import React from 'react';
import { useNavigate } from 'react-router-dom';



const AddInventoryButton = () => {
    const navigate = useNavigate();
    return(
        <>
        <button className="flex flex-col justify-center items-center p-0 w-screen h-72 text-center" onClick={() => navigate('../scan-foods')}>
            <div className="py-5">Add Item</div>
            <img src="../src/assets/upload.webp" alt="upload" className="w-12 h-12 rounded-md object-cover"/>
        </button>
        </>
    );
}

export default AddInventoryButton;
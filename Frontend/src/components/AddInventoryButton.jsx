import React from 'react';
import { useNavigate } from 'react-router-dom';



const AddInventoryButton = () => {
    const navigate = useNavigate();
    return(
        <>
        <button className="p-0 w-screen h-72 text-center" onClick={() => navigate('../scan-foods')}>
            Add Inventory
        </button>
        </>
    );
}

export default AddInventoryButton;
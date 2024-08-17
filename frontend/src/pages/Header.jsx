import React from 'react';
import {useNavigate} from 'react-router-dom'; 


function Header(){
    const navigate = useNavigate(); 
    
    return(
        <header className = "sticky top-0 bg-hot-pink shadow-md py-6 w-full flex justify-center items-center z-100">
            <button onClick={()=>navigate('/')}>
                <h1 className="justify-center items-center text-off-white">Food Thingy</h1>
            </button>
        </header>
    );
}

export default Header; 
import React from 'react';
import {useNavigate} from 'react-router-dom'; 


function Header(){
    const navigate = useNavigate(); 
    
    return(
        <header className = "top-0 bg-hot-pink shadow-md py-4 w-full flex justify-center items-center z-1000">
            <button onClick={()=>navigate('/')} className="items-center">
                <img src = "../src/assets/LEMON-AID.png" className="flex justify-center items-center text-off-white h-20" />                
            </button>
        </header>
    );
}

export default Header; 
import React from 'react';
import {useNavigate} from 'react-router-dom'; 


function Header(){
    const navigate = useNavigate(); 
    
    return(
        <header className = "sticky top-0 bg-hot-pink shadow-md py-6 w-full flex justify-center items-center z-100">
            <button onClick={()=>navigate('/')} className="items-center">
                <img src = "../src/assets/logo pic.png" className="flex justify-center items-center text-off-white h-12" />
                <span className="text-off-white">LemonAid</span>
                
            </button>
        </header>
    );
}

export default Header; 
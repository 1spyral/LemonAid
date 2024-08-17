import React from 'react';
import WebcamComponent from '../components/Webcam';
import { useNavigate } from 'react-router-dom';


function Camera() {
    const navigate = useNavigate(); 
    return(
        <div className="flex justify-center bg-hot-pink">
            <button onClick={() => navigate('/')}>
                <img src = "../src/assets/back button.png" width={30} height={30}/>
            </button>
            <WebcamComponent />
        </div>
    );
}

export default Camera;

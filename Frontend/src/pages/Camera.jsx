import React from 'react';
import WebcamComponent from '../components/Webcam';
import { useNavigate } from 'react-router-dom';

function Camera() {
    const navigate = useNavigate();
    return(
        <div>
            <div className="flex justify-left items-center bg-hot-pink">
                <button onClick={() => navigate('/')}>
                    <img src = "../src/assets/back button2.png" width={20} height={20}/>
                </button>
            </div>
            <div className="flex justify-center">
                <WebcamComponent />
            </div>
        </div>
        
    );
}

export default Camera;

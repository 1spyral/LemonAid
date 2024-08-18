import React, { useState, useEffect } from 'react';
import WebcamComponent from '../components/Webcam';
import { useNavigate } from 'react-router-dom';
import { AddFoodAlert } from '../components/AddFoodAlert';
import Header from './Header'; 

function Camera() {
    const navigate = useNavigate();
    const [captureStatus, setCaptureStatus] = useState(null);

    const handleCaptureComplete = (success) => {
        if (success) {
            setCaptureStatus("Capture successful!");
        } else {
            setCaptureStatus("Capture failed.");
        }
    };

    const handleAlertDismiss = () => {
        setCaptureStatus(null);
    };

    useEffect(() => {
        if (captureStatus) {
            const timer = setTimeout(() => {
                setCaptureStatus(null);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [captureStatus]);

    return(
        <div className="bg-baby-powder">
            <Header />
            <div className="flex justify-left items-center ml-10 mt-10">
                <button onClick={() => navigate('/')}>
                    <img src = "../src/assets/back button2.png" width={20} height={20}/>
                </button>
            </div>
            <div className="flex justify-center duration-200">
                {captureStatus && (
                    <div>
                        <AddFoodAlert captureStatus={captureStatus} onDismiss={handleAlertDismiss} className="absolute"/>
                    </div>
                )}
            </div>
            <div className="flex justify-center">
                <WebcamComponent onCaptureComplete={handleCaptureComplete} />
            </div>
        </div>
    );
}

export default Camera;

import React, { useState, useEffect } from 'react';
import WebcamComponent from '../components/Webcam';
import { useNavigate } from 'react-router-dom';
import { AddFoodAlert } from '../components/AddFoodAlert';

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
        <div>
            <div className="flex justify-left items-center bg-hot-pink">
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

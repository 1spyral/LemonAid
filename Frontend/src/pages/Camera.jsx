import React, { useState } from 'react';
import WebcamComponent from '../components/Webcam';
import { useNavigate } from 'react-router-dom';

function Camera() {
    const navigate = useNavigate();
    const [capturedImage, setCapturedImage] = useState(null);
    const handleCapture = (imageSrc) => {
        setCapturedImage(imageSrc);
    }
    const data = new FormData();
    data.append("image", {capturedImage});
    data.append("name", "");
    data.append("expiry", "");
    fetch('http://127.0.0.1:5000/api/upload_item', {
        method: "POST",
        body: data,
    }).then((response) => {
        console.log(response);
    })

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

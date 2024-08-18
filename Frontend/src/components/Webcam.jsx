import React, { useRef, useEffect } from "react";
import Webcam from "react-webcam";

const WebcamComponent = ({ onCapture, onCaptureComplete}) => {
    const webcamRef = useRef(null);

    const capturePhoto = () => {
        const imageSrc = webcamRef.current.getScreenshot({width:1024, height:512});
        if (onCapture) {
            onCapture(imageSrc);
        }
        console.log(imageSrc);

        const foodName = document.getElementById("food-name-input").value;
        const foodExpiry = document.getElementById("food-expiry-input").value;

        const data = new FormData();

        data.append("image", imageSrc);
        data.append("name", foodName);
        data.append("expiry", foodExpiry);
        console.log(foodName, foodExpiry);
        
        fetch('http://127.0.0.1:5000/api/upload_item', {
            method: "POST",
            body: data,
        }).then((response) => {
            console.log(response);
        })

        if (onCaptureComplete) {
            onCaptureComplete(true); // Pass success status and foodName
        }
    };

  return (
    <div className="items-center relative">
      <Webcam
        audio={false}
        height={504}
        width={672}
        screenshotFormat="image/jpeg"
        className="mt-2 mb-5 transform scale-x-[-1] rounded-3xl"
        ref={webcamRef}
      />
      <form id='food-info-form' className='gap-3'>
        <div>
            <label className='block'>Food Name</label>
            <input type="text" id="food-name-input" className="border-2"/>
        </div>
        <div>
            <label className='block'>Expiry Date (yyyy-mm-dd)</label>
            <input type="text" id="food-expiry-input" className="border-2"/>
        </div>
      </form>
      <button
        onClick={capturePhoto}
        className="relative left-1/2 transform -translate-x-1/2 w-1/3 h-10 rounded-xl bg-raspberry"
      >
        Capture Photo
      </button>
    </div>
  );
};

export default WebcamComponent;

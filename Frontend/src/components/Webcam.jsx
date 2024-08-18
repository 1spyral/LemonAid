import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const WebcamComponent = ({ onCapture, onCaptureComplete}) => {
    const webcamRef = useRef(null);

    const [startDate, setStartDate] = useState(null);

    const capturePhoto = () => {
        const imageSrc = webcamRef.current.getScreenshot({width:1024, height:512});
        if (onCapture) {
            onCapture(imageSrc);
        }
        console.log(imageSrc);

        const foodName = document.getElementById("food-name-input").value;
        let foodExpiry = "";
        if (startDate != null) {
          foodExpiry = startDate.toISOString().split('T')[0];
        }

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
    <div className="items-center flex-col flex z-0">
      <Webcam
        audio={false}
        height={504}
        width={672}
        screenshotFormat="image/jpeg"
        className="mt-2 mb-5 transform scale-x-[-1] rounded-3xl"
        ref={webcamRef}
      />
      <form id='food-info-form' className='gap-3 flex items-center place-content-evenly'>
        <div className="my-5 mx-20">
            <label className='block font-delius ml-14 '>Food Name</label>
            <input type="text" id="food-name-input" className="border-2 w-48 h-8 p-4 rounded-md" placeholder="Enter the food name" />
        </div>
        <div className="my-5 mx-20">
            <label className='block font-delius place-content-evenly '>Expiry Date (yyyy-mm-dd)</label>
            <DatePicker
              showIcon
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              isClearable
              className="border-2 w-48 h-8  p-4 pl-5 px-10 rounded-md "
              placeholderText="Select a date"
            />
        </div>
      </form>
      <button
        onClick={capturePhoto}
        className="relative w-1/12 mb-5"
      >
        <img src="../src/assets/camera-button.png" className="rounded-2xl"/>
      </button>
    </div>
  );
};

export default WebcamComponent;

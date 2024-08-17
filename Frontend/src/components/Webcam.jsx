import React, { useRef } from "react";
import Webcam from "react-webcam";

const WebcamComponent = ({ onCapture }) => {
  const webcamRef = useRef(null);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot({width:1024, height:512});
    if (onCapture) {
        onCapture(imageSrc);
    }
    console.log(imageSrc);
    const data = new FormData();

    data.append("image", imageSrc);
    data.append("name", "");
    data.append("expiry", "");
    fetch('http://127.0.0.1:5000/api/upload_item', {
        method: "POST",
        body: data,
    }).then((response) => {
        console.log(response);
    })
  };

  return (
    <div className="items-center relative">
      <Webcam
        audio={false}
        height={720}
        width={960}
        screenshotFormat="image/jpeg"
        className="mt-2 mb-5 transform scale-x-[-1] rounded-3xl"
        ref={webcamRef}
      />
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

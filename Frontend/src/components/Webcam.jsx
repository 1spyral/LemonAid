import React, { useRef } from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => {
  const webcamRef = useRef(null);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc); 
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

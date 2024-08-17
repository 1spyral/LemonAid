import {useNavigate} from "react-router-dom";
import React from "react";

const BackButton = () => {

    const navigate = useNavigate();

    return (
        <button onClick={() => navigate('/')}>
            <img src = "frontend/src/assets/back button.png" width={50} height={50}/>
        </button>
    );
}

export default BackButton
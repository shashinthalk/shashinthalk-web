import React, { useState, useRef } from "react";
import { Navbar5 } from "../../public-com/Navbar5";
import { Footer5 } from "../../public-com/Footer5";
import {Camera} from "react-camera-pro";

function AICam() {

  const camera = useRef(null);
  const [image, setImage] = useState(null);

  return (
    <>
        <Navbar5></Navbar5>
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <Camera ref={camera} aspectRatio={16 / 9} />
            <button onClick={() => setImage(camera.current.takePhoto())}>Take photo</button>
            <img src={image}/>
        </div>
        <Footer5></Footer5>
    </>
  );
}

export default AICam;

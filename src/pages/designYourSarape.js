import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Unity, { UnityContext } from "react-unity-webgl";
import '../myriad/style.css';
import '../App.css';
import '../App.scss';

const unityContext = new UnityContext({
  loaderUrl: "/public/Build/build.loader.js",
  dataUrl: "/public/Build/build.data",
  frameworkUrl: "/public/Build/build.framework.js",
  codeUrl: "/public/Build/build.wasm",
});

const DesignYourSarape = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Unity unityContext={unityContext}
        style={{
          width: "90%",
          border: "1px solid black",
          display:"block",
          marginTop:".1rem",
          marginLeft:"auto",
          marginRight:"auto"}}/>
    </>
    )
}

export default DesignYourSarape;
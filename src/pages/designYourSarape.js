import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./unity/build/build.loader.js",
  dataUrl: "./unity/build/build.data.unityweb",
  frameworkUrl: "./unity/build/build.framework.js.unityweb",
  codeUrl: "./unity/build/build.wasm.unityweb",
  webglContextAttributes: {preserveDrawingBuffer:true}
});

function DesignYourSarape() {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Unity unityContext={unityContext} className={"game-canvas"}
        style={{
          height: "100%",
          width: "70%",
          border: "1px solid black",
          display:"block",
          marginTop:"3rem",
          marginLeft:"auto",
          marginRight:"auto"}}/>
    </>
    )
}

export default DesignYourSarape;
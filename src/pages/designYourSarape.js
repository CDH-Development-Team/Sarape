import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import History from '../components/History';
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./unity/build/build.loader.js",
  dataUrl: "./unity/build/build.data.unityweb",
  frameworkUrl: "./unity/build/build.framework.js.unityweb",
  codeUrl: "./unity/build/build.wasm.unityweb",
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
      <Unity unityContext={UnityContext} className={"game-canvas"}
        style={{
          height: "100%",
          width: 950,
          border: "2px solid black",
          background: "grey", }}/>
    </>
    )
}

export default DesignYourSarape;
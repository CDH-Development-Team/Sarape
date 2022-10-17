import React from "react";
import { saveAs } from "file-saver";

export default function App() {
  const saveFile = () => {
    saveAs(
      "./images/booklet.pdf",
      "example.pdf"
    );
  };
  return (
    <div>
      <button onClick={saveFile}>download</button>
    </div>
  );
}
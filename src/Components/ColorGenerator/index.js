import { useState, useEffect } from "react";

export default function ColorGenerator() {
  const [typeofColor, settypeofColor] = useState("hex");
  const [color, setcolor] = useState("#000000");

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };
  const handleRandomHexcolor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[randomColorUtility(hex.length)];
    }
    setcolor(hexcolor);
  };

  const handleRandomRgbcolor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setcolor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeofColor === "hex") {
      return handleRandomHexcolor();
    } else {
      return handleRandomRgbcolor();
    }
  }, [typeofColor]);

  return (
    <div style={{ width: "100vw", height: "100vh", background: color }}>
      <button onClick={() => settypeofColor("hex")}>Hexa Color</button>
      <button onClick={() => settypeofColor("rgb")}>RGB Color</button>
      <button
        onClick={
          typeofColor === "hex" ? handleRandomHexcolor : handleRandomRgbcolor
        }
      >
        Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        <h3>{typeofColor === "rgb" ? "RGB Color " : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("green");  


  return (
    <div className="bg" style={{ backgroundColor: color }}>
      <div className="colorBar">
        <button className="redButton" 
        onClick={() => setColor("red")}
        style={{backgroundColor: "red"}}>RED</button>

        <button className="greenButton" 
        onClick={() => setColor("green")}
        style={{backgroundColor: "green"}}>GREEN</button>

        <button className="blueButton" 
        onClick={() => setColor("blue")}
        style={{backgroundColor: "blue"}}>BLUE</button>

        <button className="blackButton" 
        onClick={() => setColor("black")}
        style={{backgroundColor: "black"}}>BLACK</button>

        <button className="oliveButton" 
        onClick={() => setColor("olive")}
        style={{backgroundColor: "olive"}}>OLIVE</button>

        <button className="greyButton" 
        onClick={() => setColor("grey")}
        style={{backgroundColor: "grey"}}>GREY</button>
      </div>
    </div>
  );
}

export default App;

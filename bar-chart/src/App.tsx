import React, { useState } from "react";
import './App.css';
import BarGraph from './components/BarGraph';
import Button from './components/ButtonComponent';

export default function App() {
  const dataArray1 = [
    {
      value: 45,
      legend: 'Jan',
    },
    {
      value: 85,
      legend: 'Feb',
    },
    {
      value: 32,
      legend: 'Mar',
    },
    {
      value: 90,
      legend: 'Apr',
    }
  ];
  
  const [barColor, changeColor] = useState("skyblue");
  const [buttonColor, changeButtonColor] = useState("pink");
  
  const pinkColor = () => { //change to pink theme
    changeButtonColor("skyblue");
    changeColor("pink");
  };

  const skyblueColor = () => {  //change to skyblue theme
    changeButtonColor("pink");
    changeColor("skyblue");
  };


  return (
    <div className = "App" style = {{backgroundColor: barColor}}>
      <div className="container">
      <h1>Bar Graph</h1>
      <div className = "bars" >
        <Button color={buttonColor} onClick={(barColor=="skyblue")? pinkColor:skyblueColor}/>
        <BarGraph orientation = "vertical" color = {barColor} dataArray={dataArray1}/>
      </div>
      </div>
    </div>
  );
}
import './App.css';
import BarGraph from './components/BarGraph';
import Button from "./components/ButtonComponent";


export default function App() {
  const dataArray1 = [
    {
      value: 2,
      legend: 'Jan',
    },
    {
      value: 3,
      legend: 'Feb',
    },
    {
      value: 5,
      legend: 'Mar',
    },
    {
      value: 8,
      legend: 'Apr',
    }
  ];
  
  return (
    <div className="container">
    <h1>Bar Graph</h1>
    <div className = "bars">
      <BarGraph orientation = "vertical" color = "dark" dataArray={dataArray1}/>
    </div>
    <div>
    <Button color="black" onClick={() => console.log("You clicked on the pink circle!")}
        children = ""
      />
    <Button color="pink" onClick={() => console.log("You clicked on the pink circle!")}
        children = ""
      />  
    <Button color="yellow" onClick={() => console.log("You clicked on the pink circle!")}
      children = ""
    />
    <Button color="purple" onClick={() => console.log("You clicked on the pink circle!")}
      children = ""
    />
    </div>
    </div>
  );
}
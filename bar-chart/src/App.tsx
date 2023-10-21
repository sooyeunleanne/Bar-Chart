import './App.css';
import BarGraph from './components/BarGraph';


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
      <BarGraph orientation = "vertical" dataArray={dataArray1}/>
    </div>
    </div>
  );
}
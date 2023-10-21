import React from 'react';
import './BarItem.css';
import barColor from '../App';

export type Props = {
  legend: string;
  barPercentage: string;
  value: number;
  color: string;
};

export default function BarItem(props: Props) {
  return (
    <div className="bar-item" style= {{backgroundColor: props.color, height: props.barPercentage}}>
      <div className="bar-item-legend">{props.legend}</div>
      <div className="bar-item-value">{props.value}</div>
    </div>
  );
}
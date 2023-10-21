import React from 'react';
import './BarItem.css';

export type Props = {
  legend: string;
  barPercentage: string;
  value: number;
  orientation: string;
};

export default function BarItem(props: Props) {
  if (props.orientation == "vertical") {
    return (
      <div className="bar-item" style={{ height: props.barPercentage }}>
        <div className="bar-item-legend">{props.legend}</div>
        <div className="bar-item-value">{props.value}</div>
      </div>
    );
  }
  else {
    return (
      <div className="bar-item-vertical" style={{ width: props.barPercentage }}>
        <div className="bar-item-legend">{props.legend}</div>
        <div className="bar-item-value">{props.value}</div>
      </div>
    );
  }
}
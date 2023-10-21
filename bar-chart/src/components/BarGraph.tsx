import React, { useMemo } from 'react';
import BarItem from './BarItem';
import './BarGraph.css';

export type Props = {
  orientation: string;
  color: string;
  dataArray: Array<{
    value: number;
    legend: string;
  }>;
};

export default function BarGraph({orientation, color, dataArray }: Props) {
  const barItems = useMemo(() => {
    let highestValue = 0;

    // get the highest value
    dataArray.forEach(({ value }) => {
      highestValue = Math.max(highestValue, value);
    });

    // calculate "barPercentage" using the "highestValue" to construct the bar items
    return dataArray.map((item) => ({
      legend: item.legend,
      barPercentage: `${Math.round((item.value / highestValue) * 100)}%`,
      value: item.value,
      orientation: orientation
    }));
  }, [dataArray]);

  return (
    <div className="bar-graph">
      <div className="bars-list">
        {barItems.map((barItem, idx) => (
          <BarItem
            key={idx}
            legend={barItem.legend}
            barPercentage={barItem.barPercentage}
            value = {barItem.value}
            orientation = {barItem.orientation}
          />
        ))}
      </div>
      <div className="bars-line" />
    </div>
  );
}
import React from 'react';
import { Line } from 'react-chartjs-2';

export default function VoteCountChart(props) {

  if (!props.data || !props.data.length) return null;

  const labels = [];
  const datapoints = [];

  props.data.forEach(item => {
    labels.push(item.objectID);
    datapoints.push(item.points);
  })
  const data = {
    labels,
    datasets: [{
      label: 'Vote Count',
      data: datapoints,
      backgroundColor: "#ABC2CF",
      pointBackgroundColor: '#4C83AB',
      fill: false,
      lineTension: 0
    }],
    options: {
      scales: {
        xAxes: [{
          ticks: {
            autoSkip: false,
            maxRotation: 90,
            minRotation: 90
          }
        }]
      }
    }
  }
  return (
    <Line
      data={data}
      // width={'100%'}
      height={300}
      options={{ maintainAspectRatio: false }}
    />
  )
}
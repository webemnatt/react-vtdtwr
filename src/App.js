import React, { useState, useRef } from 'react';
import { createChart } from 'lightweight-charts';

import './style.css';

export default function App() {
  const chartContainerRef = useRef(null);
  const [showChart, setShowChart] = useState(false);

  const handleButtonClick = () => {
    setShowChart(true);

    const chart = createChart(chartContainerRef.current, {
      width: 600,
      height: 300,
    });

    const lineSeries = chart.addLineSeries();

    lineSeries.setData([
      { time: '2019-04-11', value: 80.01 },
      { time: '2019-04-12', value: 96.63 },
      { time: '2019-04-13', value: 76.64 },
      { time: '2019-04-14', value: 81.89 },
      { time: '2019-04-15', value: 74.43 },
      { time: '2019-04-16', value: 80.01 },
    ]);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Soja</button>
      <div ref={chartContainerRef}>{showChart}</div>
    </div>
  );
}

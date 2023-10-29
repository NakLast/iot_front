import { useEffect, useState } from 'react';
import { Card } from 'antd';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';

const LineChartRain = () => {
    const [rainValueData, setRainValueData] = useState<any[][]>([]);

  useEffect(() => {
    // Replace with your API URL
    const apiUrlRainValue = 'http://localhost:8000/rainValue';

    axios
      .get(apiUrlRainValue)
      .then((response) => {
        setRainValueData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching humidity data:', error);
      });
  }, []);

  const options = {
    xAxis: {
      type: 'category',
      data: rainValueData.map((item) => item[0]),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: rainValueData.map((item) => item[1]),
        type: 'line',
      },
    ],
  };

  return (
    <div>
      <Card>
        <h2>Rain</h2>
        <ReactECharts 
          option={options} 
          style={{ height: '400px' }} 
        />
      </Card>
    </div>
  );
};

export default LineChartRain;
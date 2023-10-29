import { useEffect, useState } from 'react';
import { Card } from 'antd';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';

const LineChartTemp = () => {
    const [temperatureData, setTemperatureData] = useState<any[][]>([]);

  useEffect(() => {
    const apiUrlTemperature = 'http://localhost:8000/temperature';

    axios
      .get(apiUrlTemperature)
      .then((response) => {
        setTemperatureData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching humidity data:', error);
      });
  }, []);

  const options = {
    xAxis: {
      type: 'category',
      data: temperatureData.map((item) => item[0]),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: temperatureData.map((item) => item[1]),
        type: 'line',
      },
    ],
  };

  return (
    <div>
      <Card>
        <h2>Temperature</h2>
        <ReactECharts 
          option={options} 
          style={{ height: '400px' }} 
        />
      </Card>
    </div>
  );
};

export default LineChartTemp;
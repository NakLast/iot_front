import { useEffect, useState } from 'react';
import { Card } from 'antd';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';

const LineChartHumid = () => {
  const [humidityData, setHumidityData] = useState<any[][]>([]);

  useEffect(() => {
    // Replace with your API URL
    const apiUrlHumidity = 'http://localhost:8000/humidity';

    axios
      .get(apiUrlHumidity)
      .then((response) => {
        setHumidityData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching humidity data:', error);
      });
  }, []);

  const options = {
    xAxis: {
      type: 'category',
      data: humidityData.map((item) => item[0]),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: humidityData.map((item) => item[1]),
        type: 'line',
      },
    ],
  };

  return (
    <div>
      <Card>
        <h2>Humidity</h2>
        <ReactECharts 
          option={options} 
          style={{ height: '400px' }} 
        />
      </Card>
    </div>
  );
};

export default LineChartHumid;
import { useEffect, useState } from 'react';
import { Card } from 'antd';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';

const BarChartSoil = () => {
    const [soilMoistureData, setSoilMoistureData] = useState<any[][]>([]);

  useEffect(() => {
    // Replace with your API URL
    const apiUrlSoilMoistureValue = 'http://localhost:8000/soilMoistureValue';

    axios
      .get(apiUrlSoilMoistureValue)
      .then((response) => {
        setSoilMoistureData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching humidity data:', error);
      });
  }, []);

  const options = {
    xAxis: {
      type: 'category',
      data: soilMoistureData.map((item) => item[0]),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: soilMoistureData.map((item) => item[1]),
        type: 'bar',
      },
    ],
  };

  return (
    <div>
      <Card>
        <h2>Soil Moisture</h2>
        <ReactECharts 
          option={options} 
          style={{ height: '400px' }} 
        />
      </Card>
    </div>
  );
};

export default BarChartSoil;
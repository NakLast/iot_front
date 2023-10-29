import { useEffect, useState } from 'react';
import { Card } from 'antd';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';

const BarChartLiquid = () => {
    const [liquidTempData, setLiquidTempData] = useState<any[][]>([]);

  useEffect(() => {
    const apiUrlLiquidTemp = 'http://localhost:8000/liquidtemp';

    axios
      .get(apiUrlLiquidTemp)
      .then((response) => {
        setLiquidTempData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching humidity data:', error);
      });
  }, []);

  const options = {
    xAxis: {
      type: 'category',
      data: liquidTempData.map((item) => item[0]),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: liquidTempData.map((item) => item[1]),
        type: 'bar',
      },
    ],
  };

  return (
    <div>
      <Card>
        <h2>Liquid Temperature</h2>
        <ReactECharts 
          option={options} 
          style={{ height: '400px' }} 
        />
      </Card>
    </div>
  );
};

export default BarChartLiquid;
import { Row, Col } from 'antd';

import LineChartRain from '../components/pages/dashboards/farm/LineChartRain'
import LineChartHumid from '../components/pages/dashboards/farm/LineChartHumid'
import LineChartTemp from '../components/pages/dashboards/farm/LineChartTemp'
import BarChartSoil from '../components/pages/dashboards/farm/BarChartSoil'
import BarChartLiquid from '../components/pages/dashboards/farm/BarChartLiquid'

const farmDashboard = () => {
  return (
    <div>
        <Row gutter={[10, 10]}>
            <Col lg={24}>
              <LineChartRain />
            </Col>
            <Col lg={12}>
              <LineChartHumid />
            </Col>
            <Col lg={12}>
              <LineChartTemp />
            </Col>
            <Col lg={12}>
              <BarChartSoil />
            </Col>
            <Col lg={12}>
              <BarChartLiquid />
            </Col>
        </Row>
    </div>
  );
};

export default farmDashboard;

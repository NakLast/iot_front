import { useEffect, useState } from 'react';
import { Row, Col, Card, Image } from 'antd';
import axios from 'axios'

import SCI_PSU from '../assets/SCI_PSU.png.jpg';
import Location from '../components/pages/dashboards/farm/location';
import '../assets/dashboard-farm.css';

const FarmOverview = () => {
    const [humidityData, setHumidityData] = useState([]);
    const [liquidTempData, setLiquidTempData] = useState([]);
    const [rainValueData, setRainValueData] = useState([]);
    const [soilMoistureData, setSoilMoistureData] = useState([]);
    const [temperatureData, setTemperatureData] = useState([]);

    useEffect(() => {
        const apiUrlHumidity = 'http://localhost:8000/humidity';
        const apiUrlLiquidTemp = 'http://localhost:8000/liquidtemp';
        const apiUrlRainValue = 'http://localhost:8000/rainValue';
        const apiUrlSoilMoistureValue = 'http://localhost:8000/soilMoistureValue';
        const apiUrlTemperature = 'http://localhost:8000/temperature';

        axios.get(apiUrlHumidity)
        .then((response) => {
            setHumidityData(response.data.data);
        })
        .catch((error) => {
            console.error('Error fetching humidity data:', error);
        });

        axios.get(apiUrlLiquidTemp)
        .then((response) => {
            setLiquidTempData(response.data.data);
        })
        .catch((error) => {
            console.error('Error fetching liquidtemp data:', error);
        });

        axios.get(apiUrlRainValue)
        .then((response) => {
            setRainValueData(response.data.data);
        })
        .catch((error) => {
            console.error('Error fetching rainValue data:', error);
        });

        axios.get(apiUrlSoilMoistureValue)
        .then((response) => {
            setSoilMoistureData(response.data.data);
        })
        .catch((error) => {
            console.error('Error fetching soilMoistureValue data:', error);
        });

        axios.get(apiUrlTemperature)
        .then((response) => {
            setTemperatureData(response.data.data);
        })
        .catch((error) => {
            console.error('Error fetching temperature data:', error);
        });   
    }, []);

    const farmLocations = [
        { 
            key: ['LocationA'],
            title: 'LocationA',
            description: ['Rain'],
            value: rainValueData?.[0]?.[1] || 0,
            unit: ['mm'],
            style: {
                top: '46.5%',
                left: '24.5%',
            }
        },
        { 
            key: ['LocationB'],
            title: 'LocationB',
            description: ['Temp'],
            value: temperatureData?.[0]?.[1] || 0,
            unit: ['°C'],
            style: {
                top: '46.5%',
                left: '50%'
            }
        },
        { 
            key: ['LocationC'],
            title: 'LocationC',
            description: ['Humid'],
            value: humidityData?.[0]?.[1] || 0,
            unit: ['%'],
            style: {
                top: '69%',
                left: '24.5%'
            }
        },
        { 
            key: ['LocationD'],
            title: 'LocationD',
            description: ['Soil'],
            value: soilMoistureData?.[0]?.[1] || 0,
            unit: ['%'],
            style: {
                top: '69.5%',
                left: '50%'
            }
        },
        { 
            key: ['LocationE'],
            title: 'LocationE',
            description: ['liquid'],
            value: liquidTempData?.[0]?.[1] || 0,
            unit: ['°C'],
            style: {
                top: '75%',
                left: '20.5%'
            }
        },
    ];
    
    return (
        <Row justify='space-between'>
            <Col xs={24} md={12} lg={24}>
                <Card>
                    <div style={{ position: "relative" }}>
                        <Image 
                            src={SCI_PSU}
                            preview={false}
                        />
                        {farmLocations.map((l, i) => (
                            <Location data={l} index={i} />                  
                        ))}
                    </div>
                </Card>
            </Col>
        </Row>
    );
}

export default FarmOverview;

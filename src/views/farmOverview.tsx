import { Row, Col, Card, Image } from 'antd'

import SCI_PSU from '../assets/SCI_PSU.png.jpg'

const farmOverview = () => {
    return(
        <Row justify='space-between'>
            <Col xs={24} md={12} lg={24}>
                <Card>
                    <Image 
                        src={SCI_PSU}
                        preview={false}
                    />
                </Card>
            </Col>
        </Row>
    )
}

export default farmOverview
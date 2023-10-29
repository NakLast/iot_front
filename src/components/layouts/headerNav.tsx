import React from 'react'

import { Layout, Image, Row, Col } from 'antd'

import farmLogo from '../../assets/Logo.png'

const { Header } = Layout

const HeaderNav = () => {
    return (
        <Header style={{
            display: 'flex',
            alignItems: 'center',
            background: 'white'
        }}>
            <Row gutter={16} align='middle'>
                <Col xs={5} md={2} lg={3}>
                    <Image 
                        src={farmLogo}
                        style={{ height: '50%' }}
                        preview={false}
                    />
                </Col>
                <Col xs={0} md={0} lg={20}><h1>Dashboard farm management</h1></Col>
            </Row>
        </Header>
    )
}
export default HeaderNav
import { Layout, Row, Col } from "antd"
import { Route, Routes } from "react-router-dom";

import FarmOverview from "../../views/farmOverview"
import FarmDashboard from "../../views/farmDashboard"

const { Content } = Layout

const Contents = () => {
    return(
        <Content
            style={{
                margin: '12px 16px',
                padding: 12,
                minHeight: "100vh",
            }}
        >
            <Routes>
                <Route path='/' element={<FarmOverview />} />
                <Route path='/location_a' element={<FarmDashboard />} />
                <Route path='/location_b' element={<FarmDashboard />} />
                <Route path='/location_c' element={<FarmDashboard />} />
            </Routes>
        </Content>
    )
}

export default Contents
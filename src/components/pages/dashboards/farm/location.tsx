import { Row, Col, Tooltip, Divider } from "antd"

import "./location.css"

interface Props {
    data: any
    index: number
    locationKey?: any
}

const Locations = (props:Props) => {
    return(
        <Tooltip
            overlayClassName="location-tooltip"
            zIndex={1001}
            visible={props.locationKey && props.data.key.includes(props.locationKey)}
            title={
                <>
                    <div className="location-title">{props.data.title} {props.locationKey && props.data.key.length > 1}</div>
                    {props.data.description.length > 1 ? 
                        <div className="location-description">
                            <Row gutter={[18, 18]}>
                                <Col span={24}>
                                <Row gutter={[10, 10]}>
                                    <Col span={10} order={1}>
                                        <div>{props.data.description?.[0]}</div>
                                        {/* style={{ color: '#205295'}} */}
                                        <div>{props.data.value?.[0]} {props.data.unit?.[0]}</div>
                                    </Col>
                                    {/* <Col span={6} order={2}>
                                        <Divider type="vertical" style={{ height: '40px', width: '2px' }} />
                                    </Col> */}
                                    <Col span={8} order={3}>
                                        <div>{props.data.description?.[1]}</div>
                                        {/* style={{ color: '#205295'}} */}
                                        <div>{props.data.value?.[1]} {props.data.unit?.[1]}</div>
                                    </Col>
                                </Row>
                               </Col>
                            </Row>
                        </div>  
                        :
                        <div className="location-description">
                            <div>{props.data.description}</div>
                            <div>
                                {props.data.value} {props.data.unit}
                            </div>
                        </div>
                    }
                </>
            }
            color="white"
            key={props.index}
        >
            <div
                className={
                    props.locationKey && props.data.key.includes(props.locationKey)
                        ? "farm-loction blinking"
                        : "farm-loction"
                }
                style={props.data.style}
            ></div>
        </Tooltip>
    )
}

export default Locations
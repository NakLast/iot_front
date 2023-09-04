import { Card, Col, Row } from "antd"
import { useEffect, useState } from "react"
import moment from "moment"
import ReactECharts from "echarts-for-react"

type DescType = {
  value: number
  unit: string
}

type ValueDescType = {
  avg: number
  min: number
  max: number
  unit: string
}

interface Props {
  title?: string
  chartColor?: string
  showMarkLine?: boolean
  data: any
  valueDesc: ValueDescType
  height: string
  loading?: boolean
}

const pStyle: any = { margin: 0, textAlign: "center" }
const vStyle: any = { fontSize: "12px" }
const legendStyle: any = { fontSize: "15px", fontWeight: "bold" }

const initOptions = {
  title: false,
  color: [
    "#1F78B4",
    "#1F78B4",
    "#E31A1C",
    "#FDBF6F",
    "#FB9A99",
    "#FE53B5",
    "#48C93B",
    "#3AB0FF",
    "#0500FF",
  ],
  responsive: true,
  maintainAspectRatio: false,
  tooltip: {
    trigger: "axis",
  },
  legend: false,
  grid: {
    top: "5%",
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [],
  },
  yAxis: {
    type: "value",
    show: true,
  },
  series: [
    {
      name: "",
      type: "line",
      smooth: true,
      symbol: "none",
      data: [],
    },
  ],
}

const LineChartCard = ({
  title,
  chartColor,
  showMarkLine,
  data,
  valueDesc,
  height,
  loading
}: Props) => {
  const [options, setOptions] = useState(initOptions)

  useEffect(() => {
    if (chartColor && data?.length > 0) {
      let series: any[] = [...initOptions.series]

      let seiresData: any[] = []
      let xAxisData: any = []

      data?.forEach((d: any[]) => {
        xAxisData.push(moment(d?.[0]).format("H A"))
        seiresData.push(d?.[1] ? (d?.[1]).toFixed(0) : null)
      })

      series[0] = {
        ...series[0],
        data: seiresData,
        name: title,
      }
      setOptions({
        ...initOptions,
        xAxis: { ...initOptions.xAxis, data: xAxisData },
        color: [chartColor],
        series,
      })
    } else {
      setOptions(initOptions)
    }
  }, [chartColor, data])

  return (
    <Card
      title={
        <Row justify="space-between">
          <Col>{title}</Col>
          {/* <Col>
            <Row gutter={[10, 10]}>
              <Col>{moment().format("YYYY-MM-DD")}</Col>
              <Col>TODAY</Col>
            </Row>
          </Col> */}
        </Row>
      }
      className="chart-card"
    >
      <Row align="stretch" className="chart-card-wrap">
        <Col span={24}>
          <ReactECharts
            style={{ height: height, width: "100%" }}
            option={options}
            loadingOption={loading || undefined}
          />
        </Col>
        <Col span={24} className="chart-card-footer">
          <Row justify="space-between" style={{ width: "100%" }}>
            <Col>
              <Row gutter={[10, 10]}>
                <Col>
                  <div
                    style={{
                      width: "40px",
                      height: "18px",
                      background: chartColor,
                      borderRadius: "5px",
                    }}
                  ></div>
                </Col>
                <Col style={legendStyle}>{title}</Col>
              </Row>
            </Col>
            <Col>
              <Row gutter={[10, 10]}>
                <Col>
                  <p style={{ ...pStyle, color: "#FC9D00" }}>avg</p>
                  <p style={{ ...pStyle, ...vStyle }}>
                    {valueDesc.avg} {valueDesc.unit}
                  </p>
                </Col>
                <Col>
                  <p style={{ ...pStyle, color: "#FE53B5" }}>min</p>
                  <p style={{ ...pStyle, ...vStyle }}>
                    {valueDesc.min} {valueDesc.unit}
                  </p>
                </Col>
                <Col>
                  <p style={{ ...pStyle, color: "#D42BFF" }}>max</p>
                  <p style={{ ...pStyle, ...vStyle }}>
                    {valueDesc.max} {valueDesc.unit}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default LineChartCard
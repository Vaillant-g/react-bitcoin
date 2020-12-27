import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

class BitcoinLineChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidUpdate() {}

  componentDidMount() {}

  render() {
    return (
      <>
        <ResponsiveContainer width="95%" height={400}>
          <LineChart
            width={1050}
            height={300}
            data={this.props.data}
            margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
          >
            <Line type="natural" dataKey="value" stroke="#8884d8" dot={false} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis dataKey="value" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </>
    );
  }
}

export default BitcoinLineChart;

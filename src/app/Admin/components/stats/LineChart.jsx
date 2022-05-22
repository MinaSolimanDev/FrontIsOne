import React, { PureComponent } from 'react';
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Scatter, ResponsiveContainer } from 'recharts';
import { data } from "../../../../common/helpers/FakeDataCharts";

const LineChartComponent = () => {
    class CustomizedYAxisTick extends PureComponent {
        render() {
            const {
                x, y, payload,
            } = this.props;
            return (
                <g transform={`translate(${x},${y})`}>
                    <text x={0} y={-10} dy={16} textAnchor="end" fontSize={12} fontWeight={400} fill="#A0A4A8" >{payload.value !== 0 ? `P${Number(payload.value).toLocaleString()}` : `$${payload.value}`}</text>
                </g>
            );
        }
    }

    class CustomizedXAxisTick extends PureComponent {
        render() {
            const {
                x, y, payload,
            } = this.props;
            return (
                <g transform={`translate(${x},${y})`}>
                    <text x={12} y={0} dy={16} textAnchor="end" fontSize={12} fontWeight={400} fill="#A0A4A8">{payload.value}</text>
                </g>
            );
        }
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 0, right: 5, left: 0, bottom: 50, }}>
                <CartesianGrid strokeDasharray="2 2" vertical={false} />
                <XAxis dataKey="name" tick={<CustomizedXAxisTick />} />
                <YAxis padding={{ left: 20 }} axisLine={false} tickLine={false} type='number' tick={<CustomizedYAxisTick />} />
                {/* <Tooltip /> */}
                {/* <Legend /> */}
                <Line
                    stroke="#C84D55"
                    fill="#C84D55"
                    strokeWidth={2}
                    type="monotone"
                    dataKey="uv"
                    activeDot={{ r: 0, fill: "#D6989C" }}
                    dot={{ r: 0, fill: "#D6989C" }}
                />
                <Scatter dataKey="pv" fill="#D6989C" />
            </ComposedChart>
        </ResponsiveContainer>
    );
}

export default (LineChartComponent);

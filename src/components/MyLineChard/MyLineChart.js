import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const MyLineChart = () => {
    const [data, setData] = useChart();
    return (
        <div>
            <LineChart width={500} height={400} data={data}>
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                <CartesianGrid stroke='#ccc' strokeDasharray="5 5"></CartesianGrid>
                <XAxis dataKey="month"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default MyLineChart;
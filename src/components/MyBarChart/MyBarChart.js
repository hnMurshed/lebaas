import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const MyBarChart = () => {
    const [data, setData] = useChart();
    return (
            <BarChart width={500} height={500} data={data}>
                <Bar dataKey='investment' fill='#8884d8'></Bar>
                <Bar dataKey='revenue' fill='#b5e7a0'></Bar>
                <XAxis dataKey='month'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
    );
};

export default MyBarChart;
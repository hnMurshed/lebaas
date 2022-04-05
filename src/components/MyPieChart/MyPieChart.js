import React from 'react';
import { Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const MyPieChart = () => {
    const [data, setData] = useChart();
    return (
        <div>
            <PieChart width={400} height={400}>
                <Pie data={data} dataKey='investment' cx='50%' cy='50%' outerRadius={90} fill='#8884d8'></Pie>
                <Pie data={data} dataKey='revenue' cx='50%' cy='50%' outerRadius={140} innerRadius={110} fill='#82ca9d' label></Pie>
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default MyPieChart;
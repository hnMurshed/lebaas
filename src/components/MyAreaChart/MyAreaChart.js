import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const MyAreaChart = () => {
    const [data, setData] = useChart();
    return (
        <div>
            <AreaChart
                width={500}
                height={400}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="revenue" stroke="#b5e7a0" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default MyAreaChart;
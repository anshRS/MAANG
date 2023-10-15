'use client';
import React from 'react';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function line() {
    const data = {
        labels: ['New York', 'Las Vegas', 'Texas'],
        datasets: [
            {
                label: 'With H1B',
                data: [5, 2, 9],
                backgroundColor: 'red',
                borderColor: 'lime',
                pointBorderColor: 'green',
                fill: true,
                tension: 0.4
            },
            {
                label: 'Without H1B',
                data: [1, 7, 3],
                backgroundColor: 'aqua',
                borderColor: 'yellow',
                pointBorderColor: 'orange',
                fill: true,
                tension: 0.4
            }
        ]
    }

    const options = {

    }

    return (
        <div className='h-full w-full flex justify-center'>
            <Line
                data = {data}
                options = {options}
            ></Line>
        </div>
    )
}

export default line
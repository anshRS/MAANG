'use client';
import React from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

function bar() {
    const data = {
        labels: ['New York', 'Las Vegas', 'Texas'],
        datasets: [
            {
                data: [3, 6, 9],
                backgroundColor: ['aqua','orange','green']
            }
        ]
    }

    const options = {

    }

    return (
        <div className='h-fit w-fit'>
            <Pie
                data = {data}
                options = {options}
            ></Pie>
        </div>
    )
}

export default bar
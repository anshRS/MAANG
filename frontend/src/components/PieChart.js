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

function pie() {
    const data = {
        labels: ['New York', 'Las Vegas', 'Texas'],
        datasets: [
            {
                data: [4, 6, 7],
                backgroundColor: ['#364F6B','#3FC1C9','#1FAB89'],
                hoverOffset: 4
            }
        ]
    }



    const options = {
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 15
                },
            },
        },
    }

    return (
        <div className='h-fit w-fit flex justify-center'>
            <Pie
                data = {data}
                options = {options}
            ></Pie>
        </div>
    )
}

export default pie
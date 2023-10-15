'use client';
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

function bar() {
    const data = {
        labels: ['New York', 'Las Vegas', 'Texas'],
        datasets: [
            {
                label: 'With H1B',
                data: [3, 6, 9],
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1
            },
            {
                label: 'Without H1B',
                data: [2, 12, 6],
                backgroundColor: 'orange',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    }

    const options = {

    }

    return (
        
            


            <div className='h-full w-full flex basis-2/3 items-center justify-center rounded-lg bg-black p-4'>
                <Bar
                    data = {data}
                    options = {options}
                ></Bar>
            </div>


    )
}

export default bar
'use client';
import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axiosInst from '@/utils/axios';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

function pie() {




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

    const [pieChart, setPieChart] = useState({
        Y: 0,
        N: 0
    });

    const data = {
        labels: ['Yes', 'No'],
        datasets: [
            {
                data: [pieChart.Y, pieChart.N],
                backgroundColor: ['#364F6B', '#3FC1C9'],
                hoverOffset: 4
            }
        ]
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInst.get('/api/v1/graphdata');
                setPieChart({ ...pieChart, Y: response.data.pie_details.Y, N: response.data.pie_details.N });    
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [])

    return (
        <div className='h-fit w-fit flex justify-center'>
            <Pie
                data={data}
                options={options}
            ></Pie>
        </div>
    )
}

export default pie
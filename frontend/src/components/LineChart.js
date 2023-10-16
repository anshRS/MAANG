'use client';
import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import axiosInst from '@/utils/axios';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

function line() {
    const [lineChart, setLineChart] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInst.get('/api/v1/listdata');
                // console.log(response.data.top5cities)
                setLineChart(response.data.top5cities);    
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [])

    const labels = lineChart.map((item, i)=> {
        if(i == 0) {
            return
        }
        return(
            
            item[0]
        )
    })

    const dataInfo = lineChart.map((item) => {
        return (
            item[1]
        )
    })

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'With H1B',
                data: dataInfo,
                backgroundColor: '#1FAB89',
                borderColor: '#1FAB89',
                pointBorderColor: 'white',
                fill: true,
                tension: 0.4
            },
            // {
            //     label: 'Without H1B',
            //     data: [1, 7, 3],
            //     backgroundColor: 'aqua',
            //     borderColor: '#3FC1C9',
            //     pointBorderColor: '#3FC1C9',
            //     fill: true,
            //     tension: 0.4
            // }
        ]
    }

    const options = {
        scales: {
            y : {
                max: 4400000,
                min: 20000
            }
        }

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
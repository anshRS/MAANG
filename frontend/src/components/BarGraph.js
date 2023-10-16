'use client';
import React, { useEffect, useState } from 'react';
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
import axiosInst from '@/utils/axios';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

function bar() {
    const [barChart, setBarChart] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInst.get('/api/v1/graphdata');
                // console.log(response.data.to10bar)
                // setBarChart(response.data.to10bar);    
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [])

    const labels = barChart.map((item)=>{
        return (
            item[0]
        )
    }) 

    const data_y = barChart.map((item) => {
        return (
            item[1].Y
        )
    })

    const data_n = barChart.map((item) => {
        return (
            item[1].N
        )
    })

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'With H1B',
                data: data_y,
                backgroundColor: '#3FC1C9',
                borderColor: 'black',
                borderWidth: 1
            },
            {
                label: 'Without H1B',
                data: data_n,
                backgroundColor: '#364F6B',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    }

    const options = {

    }

    return (<>
        <Bar
            data = {data}
            options = {options}
        ></Bar>
        </>
            


    )
}

export default bar
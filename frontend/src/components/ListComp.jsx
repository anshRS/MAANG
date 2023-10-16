import axiosInst from '@/utils/axios';
import React, { useEffect, useState } from 'react'

const ListComp = () => {
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
    return (
        <div className='w-full'>

            {
                lineChart.map((item, i)=>{
                    if(i == 0){
                        return
                    }
                    return(<>
                        <div className='text-white flex justify-between text-start px-5 pt-2'>
                            <h1>{item[0]}</h1>
                            <p>{item[1]}</p>            
                            
                        </div>
                        </>
                    )

                })
            }

            {/* <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Profile</li>
                <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Settings</li>
                <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Messages</li>
                <li class="w-full px-4 py-2 rounded-b-lg">Download</li>
            </ul> */}


        </div>
    )
}

export default ListComp

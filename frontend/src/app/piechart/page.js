import React from 'react'
import PieChart from "@/components/PieChart"

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#060809] text-white'>
        <h1 className='text-3xl mb-2'>Pie-Chart</h1>
        <p className=' mb-10' >Distribution of H1B and without H1B</p>
      <PieChart />
    </div>
  )
}

export default page

import React from 'react'
import Link from 'next/link'
import {AiOutlineHome, AiOutlinePieChart} from "react-icons/ai"
import {BiBarChartAlt2} from "react-icons/bi"



const Test = () => {
  return (
    <div className='h-screen bg-black flex flex-col  justify-center gap-14 w-[250px] p-4'>
      <Link href="" className='text-white flex items-center gap-6 text-xl '>
        <AiOutlineHome />
        <h3>Home</h3>
      </Link>
      <Link href="" className='text-white flex items-center gap-6 text-xl'>
        <BiBarChartAlt2 />
        <h3>Bar Chart</h3>
      </Link>
      <Link href="" className='text-white flex items-center gap-6 text-xl'>
        <AiOutlinePieChart />
        <h3>Pie Chart</h3>
      </Link>
      
    </div>
  )
}

export default Test

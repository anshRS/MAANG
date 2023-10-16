import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineHome, AiOutlinePieChart} from "react-icons/ai"
import {BiBarChartAlt2} from "react-icons/bi"
import logo from "../assets/team_logo.jpg"


const Navbar = () => {
  return (
    <div className='h-screen bg-[#0c1012] flex flex-col gap-8 w-[250px] p-6 pt-14'>
      <Image src={logo} alt='logo' className='rounded-full object-cover' />
      <Link href="" className='text-white flex items-center rounded-2xl px-2 py-3 gap-4 text-2xl hover:bg-[#3FC1C9] hover:scale-110 '>
        <AiOutlineHome />
        <h3>Home</h3>
      </Link>
      <Link href="" className='text-white flex items-center rounded-2xl px-2 py-3 gap-4 text-2xl hover:bg-[#3FC1C9] hover:scale-110'>
        <BiBarChartAlt2 />
        <h3>Bar Chart</h3>
      </Link>
      <Link href="" className='text-white flex items-center rounded-2xl px-2 py-3 gap-4 text-2xl hover:bg-[#3FC1C9] hover:scale-110'>
        <AiOutlinePieChart />
        <h3>Pie Chart</h3>
      </Link>
      
    </div>
  )
}

export default Navbar

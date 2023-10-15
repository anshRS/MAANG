import React from 'react'
import Link from 'next/link'


const Test = () => {
  return (
    <div className='h-screen bg-black flex flex-col items-center justify-center gap-16 w-[250px]'>
      <Link href="" className='text-white'>
        Home
      </Link>
      <Link href="" className='text-white'>
        Bar Chart
      </Link>
      <Link href="" className='text-white'>
        Pie Chart
      </Link>
      
    </div>
  )
}

export default Test

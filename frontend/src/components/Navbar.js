import React from 'react'
import Link from 'next/link'


const Test = () => {
  return (
    <div className='w-full bg-black h-16 flex items-center justify-center gap-16'>
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

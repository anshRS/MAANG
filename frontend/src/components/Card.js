import React from 'react'

const Card = ({title}) => {
  return (
    <div className='flex flex-col items-center p-4 bg-[#424242] text-white rounded-lg h-full hover:scale-105'>
        <h1 className=' text-lg'>
        1,000,000
        </h1>
        <h1 className='text-sm'> {title}</h1>
    </div>
  )
}

export default Card

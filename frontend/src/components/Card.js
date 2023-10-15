import React from 'react'

const Card = ({title,value}) => {
  return (
    <div className='flex flex-col items-center p-4 bg-[#0c1012] text-white rounded-lg h-full hover:scale-105'>
        <h1 className=' text-lg text-[#3FC1C9]'>
        {value}
        </h1>
        <h1 className='text-sm text-white'> {title}</h1>
    </div>
  )
}

export default Card

export default function Home() {
  return (
    <>
    <div className='border-black border-2 h-14 gap-2.5 m-2'>
      Topbar
    </div>


    <div className=''>
      <div className='flex w-full items-center justify-center gap-2.5 h-20 p-2'>
        <div className='flex basis-1/5 items-center justify-center bg-black text-white rounded-lg h-full'>number of entry</div>
        <div className='flex basis-1/5 items-center justify-center bg-black text-white rounded-lg h-full'>mean</div>
        <div className='flex basis-1/5 items-center justify-center bg-black text-white rounded-lg h-full'>median</div>
        <div className='flex basis-1/5 items-center justify-center bg-black text-white rounded-lg h-full'>25 percentile</div>
        <div className='flex basis-1/5 items-center justify-center bg-black text-white rounded-lg h-full'>75 percentile</div>
      </div>

      <div className='flex w-full items-center justify-center gap-2.5 h-96 p-2'>
        <div className='flex basis-2/3 items-center justify-center bg-black text-white rounded-lg h-full'>Main Graph</div>
        <div className='flex basis-1/3 items-center justify-center bg-black text-white rounded-lg h-full'>Sub Graph</div>
      </div>

      <div className='flex w-full items-center justify-center gap-2.5 h-44 p-2'>
        <div className='flex basis-1/3 items-center justify-center bg-black text-white rounded-lg h-full'>Main Graph</div>
        <div className='flex basis-1/3 items-center justify-center bg-black text-white rounded-lg h-full'>Main Graph</div>
        <div className='flex basis-1/3 items-center justify-center bg-black text-white rounded-lg h-full'>Main Graph</div>
      </div>

    </div>
    </>
  )
}

import Navbar from "@/components/Navbar.js"
import Card from "@/components/Card.js"
import { CardsData } from "@/constants/constants"
import BarGraph from "@/components/BarGraph"



export default function Home() {

  return (
    <>
      <div className="h-screen bg-[#212121]">
        <Navbar />

        <div className="grid grid-cols-5 w-full items-center justify-center gap-4 p-2">
          {CardsData.map((item) => (
            <Card key={item.title} title={item.title} />
          ))}
        </div>

      <div className='flex w-full items-center justify-center gap-2.5 h-96 p-2'>
        <BarGraph/>
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

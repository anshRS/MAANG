import Navbar from "@/components/Navbar.js";
import Card from "@/components/Card.js";
import { CardsData } from "@/constants/constants";
import BarGraph from "@/components/BarGraph";
import PieChart from "@/components/PieChart";
import LineChart from "@/components/LineChart";

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

        <div className="grid grid-cols-3 gap-2.5 justify-center">
          <div className="flex col-span-2 items-center justify-center rounded-lg bg-black p-4  h-96">
            <LineChart />
          </div>
            <div className="flex items-center justify-center bg-black p-4 text-white rounded-lg h-96 py-8">
              <PieChart/>
            </div>
        </div>

        <div className="flex w-full items-center justify-center gap-2.5 h-44 p-2">
          <div className="flex basis-1/3 items-center justify-center bg-black text-white rounded-lg h-full">
            Main Graph
          </div>
          <div className="flex basis-1/3 items-center justify-center bg-black text-white rounded-lg h-full">
            Main Graph
          </div>
          <div className="flex basis-1/3 items-center justify-center bg-black text-white rounded-lg h-full">
            Main Graph
          </div>
        </div>
      </div>
    </>
  );
}
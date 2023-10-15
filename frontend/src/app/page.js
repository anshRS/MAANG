"use client";
import Navbar from "@/components/Navbar.js";
import Card from "@/components/Card.js";
import BarGraph from "@/components/BarGraph";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import { useEffect, useState } from "react";
import axiosInst from "@/utils/axios";

export default function Home() {
  const [numberOfRecords, setNumberOfRecords] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInst.get("/api/v1/totalrecords");
        console.log(response)
        setNumberOfRecords(response.data.total_records);
      } catch (err) {
        console.log(err);
      }
    }

    // Call the async function
    fetchData();
  },[]);

  return (
    <>
      <div className="h-screen bg-[#212121] flex items-center">
        <Navbar />
        <div className="w-full p-4 flex flex-col gap-3"> 

        <div className="grid grid-cols-5 w-full items-center justify-center gap-4">
          
            <Card title="Number of Records" value={numberOfRecords} />
            <Card title="Mean Salary" value={numberOfRecords} />
            <Card title="Median Salary" value={numberOfRecords} />
            <Card title="25th Percentile Salary" value={numberOfRecords} />
            <Card title="75th Percentile Salary" value={numberOfRecords} />
        
        </div>

        <div className="grid grid-cols-3 gap-3 justify-center">
          <div className="flex col-span-2 items-center justify-center rounded-lg bg-black p-4 h-80">
            <LineChart />
          </div>
            <div className="flex items-center justify-center bg-black p-4 text-white rounded-lg ">
              Sub Graph
            </div>
        </div>

        <div className="flex items-center justify-center gap-3 h-60 ">
          <div className="flex basis-1/3 p-4 items-center justify-center bg-black text-white rounded-lg h-full">
            <PieChart />
          </div>
          <div className="flex basis-1/3 p-4 items-center justify-center bg-black text-white rounded-lg h-full">
            <BarGraph />
          </div>
          <div className="flex basis-1/3 items-center justify-center bg-black text-white rounded-lg h-full">
            Main Graph
          </div>
        </div>
      </div>
        </div>
    </>
  );
}

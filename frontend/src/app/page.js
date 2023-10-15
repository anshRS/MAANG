"use client";
import Navbar from "@/components/Navbar.js";
import Card from "@/components/Card.js";
import BarGraph from "@/components/BarGraph";
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
      <div className="h-screen bg-[#212121]">
        <Navbar />

        <div className="grid grid-cols-5 w-full items-center justify-center gap-4 p-2">
          
            <Card title="Number of Records" value={numberOfRecords} />
            <Card title="Mean Salary" value={numberOfRecords} />
            <Card title="Median Salary" value={numberOfRecords} />
            <Card title="25th Percentile Salary" value={numberOfRecords} />
            <Card title="75th Percentile Salary" value={numberOfRecords} />
        
        </div>

        <div className="grid grid-cols-3 gap-2.5 justify-center">
          <div className="flex col-span-2 items-center justify-center rounded-lg bg-black p-4  h-96">
            <BarGraph />
          </div>
            <div className="flex items-center justify-center bg-black p-4 text-white rounded-lg ">
              Sub Graph
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

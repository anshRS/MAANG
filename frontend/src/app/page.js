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
  const [meanSalary, setmeanSalary] = useState(0);
  const [medianSalary, setMedianSalary] = useState(0);
  const [percentileSalary, setPercentileSalary] = useState({twentyfive:"",seventyfive:""});

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axiosInst.get("/api/v1/totalrecords");
        setNumberOfRecords(response.data.total_records);
        
        response = await axiosInst.get("/api/v1/meansalary");
        setmeanSalary(response.data.mean_salary);

        response = await axiosInst.get("/api/v1/mediansalary");
        setMedianSalary(response.data.median_salary);
        
        response = await axiosInst.get("/api/v1/percentilesalary");
        setPercentileSalary(response.data);

      } catch (err) {
        console.log(err);
      }
    }

    // Call the async function
    fetchData();
  },[]);

  return (
    <>
      <div className="h-screen bg-[#060809] flex items-center">
        <Navbar />
        <div className="w-full p-4 flex flex-col gap-6"> 

        <div className="grid grid-cols-5 w-full items-center justify-center gap-4">
          
            <Card title="Number of Records" value={numberOfRecords} />
            <Card title="Mean Salary" value={meanSalary} />
            <Card title="Median Salary" value={medianSalary} />
            <Card title="25th Percentile Salary" value={percentileSalary.twentyfive} />
            <Card title="75th Percentile Salary" value={percentileSalary.seventyfive} />
        
        </div>

        <div className="grid grid-cols-3 gap-4 justify-center">
          <div className="flex col-span-2 items-center justify-center rounded-xl bg-[#0c1012] p-4 h-80">
            <LineChart />
          </div>
            <div className="flex items-center justify-center bg-[#0c1012] p-4 text-white rounded-xl ">
              Sub Graph
            </div>
        </div>

        <div className="flex items-center justify-center gap-4 h-60 ">
          <div className="flex basis-1/3 p-4 items-center justify-center bg-[#0c1012] text-white rounded-xl h-full">
            <PieChart />
          </div>
          <div className="flex basis-1/3 p-4 items-center justify-center bg-[#0c1012] text-white rounded-xl h-full">
            <BarGraph />
          </div>
          <div className="flex basis-1/3 items-center justify-center bg-[#0c1012] text-white rounded-xl h-full">
            Main Graph
          </div>
        </div>
      </div>
        </div>
    </>
  );
}

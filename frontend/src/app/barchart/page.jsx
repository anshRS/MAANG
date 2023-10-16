'use client'
import BarGraph from "@/components/BarGraph";

const page = () => {
    return (
        <div className="flex flex-col px-72 pt-6 justify-center items-center bg-[#060809] h-screen">
            <h1 className="text-white text-3xl mb-2 font-semibold">BAR CHART</h1>
            <p className="text-white mb-14">State wise top 5 distribution of H1B</p>
            <BarGraph/>
        </div>
    )
}

export default page

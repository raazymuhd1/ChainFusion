import React from 'react'
import {dummyDashboard} from "@/constants"
import { MdOutlineShowChart } from "react-icons/md";

const Dashboard = () => {

    const handleDashboardData = (title: string, val: string, increasePercentages: string) => {
        return (
            <div className='p-[20px] min-h-[150px] flex flex-col justify-between glass_bg flex-1 gap-[20px] rounded-[15px]'>
                <div className='flex items-center w-full justify-between'>
                    {/* icon */}
                    <MdOutlineShowChart className='bg-[#f94b78] w-[30px] h-[30px] p-[5px] rounded-[15px]' />
                    <p className='text-[#5aac35] font-bold'> { increasePercentages } </p>
                </div>

                <p className='text-[#fefffe]'> { title } </p>
                <h3 className='font-extrabold text-[clamp(1vw,1.5vw,2vw)] translate-y-[-10px]'> { val } </h3>
            </div>
        )
    }

  return (
    <section className="flex-1 p-[20px]">
        <aside className='flex flex-col'>
            <h2 className='font-bold text-[clamp(1vw,2vw,2vw)]'> Dashboard </h2>
            <p className='text-[#fefffe]'> Welcome back to ChainFusion </p>
        </aside>

        <div className='flex mt-[30px] items-center gap-[10px] flex-wrap place-content-center '>
            { handleDashboardData("Total Portfolio", `$12,456.78`, `+12.5%`) }
            { handleDashboardData("Cross-chain Savings", `$892.34`, `+5.2%`) }
            { handleDashboardData("Active Bridges", `3`, `1`) }
            { handleDashboardData("Staking Rewards", `$234.56`, `+18.7%`) }
        </div>
    </section>
  )
}

export default Dashboard
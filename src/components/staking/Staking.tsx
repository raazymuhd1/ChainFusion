import React from 'react'
import { stakingData } from "@/constants"
import StakingTabs from "./StakingTabs"

const Staking = () => {
  return (
    <section className='w-full max-h-[500px] p-[30px] grid grid-rows-[repeat(3,minmax(10px,1fr))] gap-[30px]'>
         <div className=''>
           <h2 className='font-extrabold text-[clamp(1.4vw,2.5vw,3vw)]'> Staking </h2>
           <p className='font-normal text-[clamp(.8vw,1,2vw,1.5vw)] text-[var(--grey-color)] '> Earn rewards by staking your tokens across multiple chains </p>
        </div>

        {/* staking info */}
        <aside className='w-full grid gap-[20px] md:grid-cols-[repeat(3,minmax(200px,1fr))]'>
           { stakingData.map(stake => (
              <div 
                key={stake.id}
                className='flex items-center gap-[5px] glass_bg p-[20px] rounded-[15px] min-h-[130px]'>
                  <stake.Icon className='w-[35px] h-[35px] p-[5px] rounded-[15px] bg-[#fd3870] ' />
                  <aside>
                      <p className='text-[var(--grey-color)] text-[clamp(14px,1vw,16px)]'> { stake.title } </p>
                      <h4 className="font-extrabold text-[clamp(16px,1.5vw,35px)] "> { stake.id != 3 ? `$${stake.value}` : `${stake.value}%` } </h4>
                  </aside>
              </div>
           )) }
        </aside>

        {/* staking tabs */}
        <StakingTabs />

        {/* available pools */}
    </section>
  )
}

export default Staking
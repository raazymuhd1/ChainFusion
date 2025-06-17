import React from 'react'
import { lendingPools } from "@/constants"
import Image from 'next/image'
import { CustomButton } from "@/components"
import { useAppDispatch } from "@/hooks/reduxHooks"

const marketsHeader = ['Asset', ["Supply APY", "Borrow APY", "Liquidity"], "Actions"]

const LendingPools = () => {
  const dispatch = useAppDispatch()

  return (
    <aside className='w-[120%] flex flex-col gap-[20px] translate-x-[-5.5rem] glass_bg rounded-[15px] p-[20px]'>
        <h4 className="font-extrabold text-[clamp(calc(1rem+4px),1vw,2rem)]"> Available Markets </h4>

        {/* headers */}
        <aside className='flex items-center w-full justify-between'>
            <h3 className='font-bold text-[clamp(1rem,1vw,1,4rem)]' > { marketsHeader[0] } </h3>
            <div className='flex items-center gap-[35px] justify-evenly'>
              {/* @ts-ignore */}
              { marketsHeader[1] > 0 && marketsHeader[1].length.map((header, idx) => (
                <h3 key={idx} className='font-bold text-[clamp(1rem,1vw,1,4rem)]' > { header } </h3>
              )) }
            </div>
            <h3 className='font-bold text-[clamp(1rem,1vw,1,4rem)]' > { marketsHeader[2] } </h3>
        </aside>


        {/* pools */}
        { lendingPools.map(pool => (
           <div key={pool.id} className='w-full flex items-center justify-between'>
               <aside className='flex items-center gap-[10px]'>
                  <Image src={pool.logo} alt="pool-img" className='object-cover w-[30px] h-[30px] rounded-[50%]' />
                  <h5 className='font-bold '> { pool.asset } </h5>
               </aside>

               <div className='flex items-center gap-[85px]'>
                   <h3 className='font-semibold text-[clamp(.7rem,1vw,1rem)] text-[var(--success)]'> %{ pool.supplyApy } </h3>
                   <h3 className='font-semibold text-[clamp(.7rem,1vw,1rem)]'> %{ pool.borrowApy } </h3>
                   <h3 className='font-semibold text-[clamp(.7rem,1vw,1rem)] text-[#bb3939]'> ${ pool.liquidity }M </h3>
               </div>

               {/* actions */}
                <div className='flex items-center gap-[10px]'>
                  <CustomButton
                    styles='bg-[var(--warning)] text-[clamp(.7rem,1vw,.9rem)]! w-[fit-content]! p-[8px]' 
                    title='supply' />
                  <CustomButton 
                    styles='bg-[var(--purple)] text-[clamp(.7rem,1vw,.9rem)]! w-[fit-content]! p-[8px]' 
                    title='borrow' />
                </div>
           </div>
        )) }
    </aside>
  )
}

export default LendingPools
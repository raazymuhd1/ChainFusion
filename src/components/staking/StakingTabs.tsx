"use client"
import { useState } from 'react'
import { availablePools } from '@/constants';
import StakingPools from './StakingPools';

const StakingTabs = () => {
     const [activeTabs, setActiveTabs] = useState([
         { id: 1, title: "All Pools", active: true },
         { id: 2, title: "My Stakes", active: false },
     ]);

     const handleActiveTabs = (id: number) => {
        // make a copies of the array bfore updating the object inside of array
        const tabs = [...activeTabs];
        const tabIsActive = tabs.find(tab => tab.id === id)
        const tabIsNotActive = tabs.filter(tab => tab.id !== id)

        // @ts-ignore
        tabIsActive.active = true;
        // @ts-ignore
        tabIsNotActive.forEach(tab => {
            tab.active = false;
        })

         setActiveTabs(tabs)
     }

     console.log(activeTabs)

  return (
    <section className='w-full h-[300px] grid grid-rows-[repeat(2)] gap-[20px] box-border'>
        <div className='w-[30%] max-h-[fit-content] border-[1px] flex items-center p-[10px] rounded-[15px]'>
            { activeTabs.map(tab => (
                <h4 
                    key={tab.id}
                    onClick={() => handleActiveTabs(tab.id)}
                    className={`${tab.active == true && "bg-[var(--secondry-bgColor)]"} p-[10px] w-[50%] rounded-[15px] hover:bg-[var(--secondry-bgColor)] cursor-pointer transition-[background_1s]`}> { tab.title }
                </h4>
            )) }
        </div>

        <aside className='grid grid-cols-[repeat(1)] gap-[20px]'>
            {/* available pools */}
            { activeTabs[0].active == true ? availablePools.map(pool => (
                <StakingPools key={pool.id} { ...pool }  />
            )) : <h2> my stakes </h2> }
        </aside>
    </section>
  )
}

export default StakingTabs
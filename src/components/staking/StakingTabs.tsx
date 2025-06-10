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
         setActiveTabs([

         ])
     }

  return (
    <section className='w-full'>
        <div className='w-[30%] border-[1px] flex items-center p-[10px] rounded-[15px]'>
            { activeTabs.map(tab => (
                <h4 
                    key={tab.id}
                    className='p-[10px] w-[50%] rounded-[15px] hover:bg-[#fd3870] cursor-pointer transition-[background_1s]'> All Pools
                </h4>
            )) }
        </div>

        
        {/* available pools */}
        { availablePools.map(pool => (
            <StakingPools key={pool.id} { ...pool }  />
        )) }
    </section>
  )
}

export default StakingTabs
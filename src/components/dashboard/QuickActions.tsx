import React from 'react'
import { quickActions } from '@/constants'

const QuickActions = () => {
  return (
    <aside className='grid grid-rows-[repeat(2,minmax(0,1fr))] w-[50%] min-h-[300px] glass_bg rounded-[15px] p-[20px] place-items-start '>
        <h3 className='font-bold text-[clamp(1vw,2vw,2vw)]'> Quick Actions </h3>

        <div className='grid grid-rows-[repeat(3,minmax(0,1fr))] gap-[10px]'>
            { quickActions.map(act => (
                <div key={act.id} className={`w-full grid grid-cols-[repeat(2,minmax(0px,1fr))] justify-items-start gap-[10px] bg-[${act.bgColor}] `}>
                    <act.Icon className='w-[20px] h-[20px]' />
                    <h3 className='font-semibold text-[clamp(1vw,1vw,2vw)]'> { act.title } </h3>
                </div>
            )) }
        </div>
    </aside>
  )
}

export default QuickActions
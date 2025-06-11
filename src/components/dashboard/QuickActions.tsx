"use client"
import { useState } from 'react'
import { quickActions } from '@/constants'

const QuickActions = () => {
    const [actions, setActions] = useState(quickActions)

  return (
    <aside className='flex flex-col w-[50%] min-h-[250px] glass_bg rounded-[15px] p-[20px] place-items-start gap-[20px]'>
        <h3 className='font-bold text-[clamp(1vw,1.5vw,2vw)]'> Quick Actions </h3>

        <div className='w-full flex flex-col gap-[20px]'>
            { actions.map(act => (
                <div key={act.id} className={`w-full flex items-center gap-[10px] 
                 bg-[${act.bgColor}] p-[10px] rounded-[10px]`}>
                    <act.Icon className='w-[20px] h-[20px]' />
                    <h3 className='font-semibold text-[clamp(.9vw,.8vw,2vw)]'> { act.title } </h3>
                </div>
            )) }
        </div>
    </aside>
  )
}

export default QuickActions
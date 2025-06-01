import React from 'react'
import { countersData } from '@/constants'

const Counters = () => {
  return (
    <section className={`grid mt-[30px] grid-cols-[repeat(auto-fit,minmax(100px,1fr))] w-[60%] justify-items-center mx-auto gap-[20px]`}>
        { countersData.map((count, idx) => (
            <aside
                key={idx}
                className='flex flex-col items-center gap-[5px] cursor-pointer hover:scale-[1.1] transition-[scale_500ms] '>
               <h2 className='font-bold text-[clamp(1.3em,1.7em,2em)] '> { count.value } </h2>
               <h4 className='text-[#9090a8]'> { count.title } </h4>
            </aside>
        )) }
    </section>
  )
}

export default Counters
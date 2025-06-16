import React from 'react'
import Image from "next/image"
import { circle } from '@/assets'

const SupplyModal = () => {
  return (
    <section className={`w-[100vw] h-screen fixed top-0 glass_bg`}>
        {/* modal's card */}
        <div className='w-[40%] h-[40%] glass_bg p-[20px] rounded-[15px]'>
            <h3> Supply ETH </h3>
            <aside className='glass_bg p-[10px] rounded-[15px]'>
                <div className='flex items-center gap-[10px]'>
                    <Image src={circle} alt="circle" className='object-cover w-[30px] h-[30px] rounded-[50%]' />
                    <div className=''>
                        <h2> ETH </h2>
                        <p> ethereum </p>
                    </div>
                </div>

                <h4 className='font-extrabold text-[var(--success)] text-[clamp(1rem,1vw,1.2rem)]'> 4.5% APY </h4>
            </aside>
        </div>
    </section>
  )
}

export default SupplyModal
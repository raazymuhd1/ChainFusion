import React from 'react'
import Image from "next/image"
import { circle } from '@/assets'
import { supplyInfo } from "@/constants"
import { X } from "lucide-react"
import { CustomButton } from "@/components"



const SupplyModal = () => {
  return (
    <section className={`w-[100vw] h-screen flex flex-col gap-[20px] place-content-center fixed inset-0 rounded-[0px]! modal_glass`}>
        {/* modal's card */}
        <div className='w-[30%] h-[50%] min-[fit-content] flex flex-col items-center gap-[10px] self-center glass_bg p-[20px] rounded-[15px]'>
            <div className='flex w-full items-center justify-between'>
                <h3 className='font-bold text-[clamp(1em,1vw,1.5em)]'> Supply ETH </h3>
                <X className='w-[20px] h-[20px]' />
            </div>
            <aside className='w-full glass_bg p-[10px] rounded-[15px]'>
                <div className='flex items-center gap-[10px]'>
                    <Image src={circle} alt="circle" className='object-cover w-[30px] h-[30px] rounded-[50%]' />
                    <div className=''>
                        <h2> ETH </h2>
                        <p> Ethereum </p>
                    </div>
                </div>

                <h4 className='font-extrabold text-[var(--success)] text-[clamp(.7rem,1vw,1rem)]'> 4.5% APY </h4>
            </aside>

            {/* amount to supply */}
            <aside className='w-full'>
                <label htmlFor="amount"> Amount to supply </label>
                <div className='flex w-full p-[10px] rounded-[15px] glass_bg flex-col gap-[10px]'>
                    <input type="text" placeholder='0' className='p-[10px] active:border-[1px] rounded-[15px] w-full placeholder:text-[clamp(1rem,1vw,1.4rem)]' />
                    <div className='flex items-center w-full justify-between'>
                        <h5 className="text-[var(--grey-color)]"> Balance: 
                            <strong className='font-bold'> 5 ETH </strong> 
                        </h5>
                        <h3> Max </h3>
                    </div>
                </div>
            </aside>

            {/* info */}
            <aside className='flex w-full flex-col gap-[5px]'>
                { supplyInfo.map(info => (
                    <div key={info.id} className='w-full flex items-center justify-between'>
                        <p className='text-[var(--grey-color)]'> { info.title } </p>
                        <h4 className='font-semibold'> { info.value } </h4>
                    </div>
                )) }
            </aside>

            {/* button */}
            <CustomButton styles='w-[40%]! font-semibold bg-[var(--warning)]' title='Supply' />
        </div>
    </section>
  )
}

export default SupplyModal
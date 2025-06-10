import React from 'react'
import { PiCoinBold } from "react-icons/pi";
import { CustomButton } from "@/components"

type TProps = {
    id: number;
    title: string;
    network: string;
    details: {
           title: string;
           value: string;
        }[]
    
}

const StakingPools = ({ title, network, details }: TProps) => {

  return (
    <section className='w-full'>  
        <aside className='w-full glass_bg p-[20px] rounded-[15px] grid grid-cols-[repeat(3,minmax(200px,1fr))]'>

            <div className='flex items-center gap-[10px]'>
                <PiCoinBold className='w-[35px] h-[35px]' />
                <div className=''>
                    <h4> { title } </h4>
                    <p> { network } </p>
                </div>
            </div>

            <div className='flex items-center gap-[20px]'>
                { details.map((detail, idx) => (
                    <div key={idx} className=''>
                        <p> { detail.title } </p>
                        <h5> { detail.value } </h5>
                    </div>
                )) }
            </div>

           <CustomButton styles='' title="Stake" />
        </aside>
    </section>
  )
}

export default StakingPools
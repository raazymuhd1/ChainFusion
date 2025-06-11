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
                <PiCoinBold className='w-[35px] h-[35px] p-[5px] rounded-[15px] bg-[var(--secondry-bgColor)]' />
                <div className=''>
                    <h4 className='font-bold text-[clamp(16px,1vw,22px)]'> { title } </h4>
                    <p className='text-[var(--grey-color)]'> { network } </p>
                </div>
            </div>

            <div className='flex items-center gap-[20px]'>
                { details.map((detail, idx) => (
                    <div key={idx} className=''>
                        <p className='text-[var(--grey-color)]'> { detail.title } </p>
                        <h5 
                            className={`font-bold text-[clamp(16px,1vw,18px)]  ${(detail.title.toLowerCase() == "apy" || detail.title.toLowerCase() == "rewards") && "text-[var(--success-bg)]" } `}> { detail.title.toLowerCase() == "apy" ? `${detail.value}%` : detail.title.toLowerCase() == "tvl" ? `$${detail.value}` : detail.value } </h5>
                    </div>
                )) }
            </div>

           <CustomButton styles='bg-[var(--secondry-bgColor)] justify-self-end  py-[5px] px-[8px]' title="Stake" />
        </aside>
    </section>
  )
}

export default StakingPools
import React from 'react'
import Image from 'next/image'
import { tokensStatus } from "@/constants"
import { GrFormCheckmark } from "react-icons/gr";

const TokenStatus = () => {
  return (
    <aside className='w-[50%] glass_bg p-[20px] rounded-[15px]'>
        <h4 className="font-bold text-[clamp(18px,1vw,25px)]"> Token Status </h4>

        <aside className='w-full'>

            { tokensStatus.map(status => (
                <div key={status.id} className='p-[10px] rounded-[15px] glass_bg'>
                    {/* top */}
                    <aside className='w-full flex items-center justify-between'>
                        <div className='flex items-center gap-[10px]'>
                            <Image src={status.logo} alt="" />
                            <h4> { status.name } </h4>
                        </div>
                        <GrFormCheckmark />
                    </aside>

                    {/* middle */}
                    <aside className='flex items-center justify-between'>
                        <p> Network: </p>
                        <p> { status.network } </p>
                    </aside>

                    {/* bottom */}
                    <aside className='flex items-center justify-between'>
                        <p> Status: </p>
                        <p className='text-[var(--success)]'> { status.status } </p>
                    </aside>
                </div>
            )) }

        </aside>
    </aside>
  )
}

export default TokenStatus
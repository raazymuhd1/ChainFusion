import React from 'react'
import { tokensOption } from '@/constants'
import Image from 'next/image'
import { CustomButton } from "@/components"

const selectedTokenInfo = [
    { id: 1, title: "Amount", value: "100 USDC" },
    { id: 2, title: "Network", value: "Sepolia" },
]

const ClaimFaucet = () => {
  return (
    <aside className='glass_bg grid grid-cols-[1fr] gap-[20px] w-[50%] rounded-[15px] p-[20px]'>
        <h4 className="font-bold text-[clamp(18px,1vw,25px)]"> Claim Tokens </h4>

        {/* tokens option */}
        <article className='w-full flex flex-col gap-[10px]'>
            <h5> Select Token </h5>
            <div className='w-full grid grid-cols-[repeat(2,minmax(120px,1fr))] gap-[16px]'>
                { tokensOption.map(token => (
                    <div 
                        className='flex flex-col items-center gap-[5px] p-[15px] rounded-[15px] border-[1px] cursor-pointer' key={token.id}>
                        <Image src={token.logo} alt="token-logo" className='object-cover rounded-[50%]' />
                        <h4 className='font-bold'> { token.title } </h4>
                        <p className='text-[var(--grey-color)]'> { token.value } </p>
                    </div>
                )) }
            </div>
        </article>

        {/* detail */}
        <div className='w-full flex flex-col gap-[10px] glass_bg rounded-[15px] p-[15px]'>
            <aside className='flex items-center gap-[10px]'>
                <Image src={tokensOption[0].logo} alt="" className="" />
                <h3 className='font-bold'> USDC </h3>
            </aside>
            
            <aside className='w-full flex flex-col gap-[5px]'>
                { selectedTokenInfo.map(info => (
                    <div key={info.id} className='w-full grid grid-cols-[repeat(2,minmax(20px,100px))] justify-between'>
                        <h5 className='font-normal text-[var(--grey-color)] lowercase'> {info.title}: </h5>
                        <h3 className='font-bold'> { info.value } </h3>
                    </div>
                )) }
            </aside>
        </div>

        {/* wallet input */}
        <aside className="flex flex-col gap-[10px]">
            <aside className='flex flex-col gap-[5px]'>
                <label htmlFor="wallet">Wallet Address:</label>
                <input type="text" placeholder='0x..' className="p-[10px] rounded-[15px] w-full border-[1px]" />
            </aside>
            <CustomButton styles="p-[8px] w-full bg-[#5aac35]" title={`Claim 100 USDC`} />
        </aside>

        {/* claim button */}
    </aside>
  )
}

export default ClaimFaucet
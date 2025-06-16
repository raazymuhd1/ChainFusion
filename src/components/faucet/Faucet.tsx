import React from 'react'
import ClaimFaucet from './ClaimFaucet'
import TokenStatus from "./TokenStatus"
import Instructions from './Instructions'

const Faucet = () => {
  return (
    <section className='p-[30px] w-[80%] h-full mx-auto grid grid-cols-[repeat(1,minmax(0,1fr))] justify-items-center gap-[20px]'>
        {/* info */}
        <aside className='w-full items-center flex flex-col'>
            <h2 className='font-bold text-[clamp(1vw,2vw,2vw)]'> Faucet </h2>
            <p className='text-[var(--grey-color)] text-center'> Claim your testnet tokens by following the instructions below </p>
        </aside>

            {/* instructions */}
            <Instructions />

            {/* faucet details */}
            <div className='w-full justify-center flex lg:flex-nowrap flex-wrap gap-[15px]'>
                <ClaimFaucet />
                <TokenStatus />
            </div>
    </section>
  )
}

export default Faucet
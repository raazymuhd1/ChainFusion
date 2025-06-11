import React from 'react'
import ClaimFaucet from './ClaimFaucet'
import TokenStatus from "./TokenStatus"

const Faucet = () => {
  return (
    <section className='p-[30px] w-[80%] grid grid-rows-[repeat(2,minmax(0,1fr))] justify-items-center '>
        {/* info */}
        {/* instructions */}

        {/* faucet details */}
        <div className='w-full flex items-center gap-[15px]'>
            <ClaimFaucet />
            <TokenStatus />
        </div>
    </section>
  )
}

export default Faucet
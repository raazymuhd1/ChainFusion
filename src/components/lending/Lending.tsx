import React from 'react'
import LendingInfo from './LendingInfo'
import LendingCard from './LendingCard'

const Lending = () => {
  return (
    <section className="w-[80%] grid grid-cols-[repeat(1,minmax(0,1fr))] gap-[20px] mx-auto p-[30px]">
         <aside className='w-full items-center flex flex-col'>
            <h2 className='font-bold text-[clamp(1vw,2vw,2vw)] text-[var(--warning)]'> Lending & Borrowing </h2>
            <p className='text-[var(--grey-color)] text-center'> Claim your testnet tokens by following the instructions below </p>
        </aside>

        {/* lending info */}
        <LendingInfo />

        {/* lending supply & borrow card */}
        <LendingCard />

        {/* available lending pools */}
    </section>
  )
}

export default Lending
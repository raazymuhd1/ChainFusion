"use client"
import React from 'react'
import LendingInfo from './LendingInfo'
import LendingCard from './LendingCard'
import LendingPools from './LendingPools'
import SupplyModal from './SupplyModal'
import BorrowModal from "./BorrowModal"

const Lending = () => {
  return (
    <section className="lg:w-[80%] w-full grid grid-cols-[repeat(1,minmax(0,1fr))] gap-[20px] mx-auto p-[30px]">
         <aside className='w-full items-center flex flex-col'>
            <h2 className='font-bold text-[clamp(1.5rem,2vw,2rem)] text-[var(--warning)] whitespace-nowrap'> Lending & Borrowing </h2>
            <p className='text-[var(--grey-color)] text-center'> Claim your testnet tokens by following the instructions below </p>
        </aside>

        {/* lending info */}
        <LendingInfo />

        {/* grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] */}
        <aside className='w-full flex lg:flex-nowrap gap-[20px] flex-wrap'>
          {/* lending supply & borrow card */}
          <LendingCard />
          {/* available lending pools */}
          <LendingPools />
        </aside>

         <SupplyModal />
         <BorrowModal />
    </section>
  )
}

export default Lending
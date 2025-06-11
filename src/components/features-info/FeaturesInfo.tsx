import React from 'react'
import { cards } from "@/constants"
import Card from "./Card"

const FeaturesInfo = () => {
  return (
    <section className='w-[80%] mx-auto mt-[160px]'>
        <div className='w-full justify-items-center grid grid-rows-[repeat(2,minmax(0,1fr))] gap-[10px]'>
            <h2 className='font-bold text-[clamp(2em,4vw,3em)] text-center'> Powerful Features for 
                <span className='text-[var(--warning)] font-extrabold'> Modern DeFi </span> </h2>
            <p className='text-[clamp(1em,1vw,1.5em)] md:w-[80%] w-full text-center'> Everything you need to navigate the multi-chain ecosystem with confidence and efficiency. </p>
        </div>

        <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[20px]'>
            { cards.map(card => (
                <Card key={card.id} { ...card } />
            )) }
        </div>
    </section>
  )
}

export default FeaturesInfo
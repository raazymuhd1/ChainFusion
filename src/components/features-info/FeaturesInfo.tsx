import React from 'react'
import { cards } from "@/constants"
import Card from "./Card"

const FeaturesInfo = () => {
  return (
    <section className='w-[80%] mx-auto mt-[160px]'>
        <div className='w-full justify-items-center grid grid-rows-[repeat(2,minmax(0,1fr))]'>
            <h2 className='font-bold text-[clamp(2em,3em,3em)]'> Powerful Features for 
                <span className='text-[#6ca54b] font-extrabold'> Modern DeFi </span> </h2>
            <p className='text-[clamp(1em,1.3em,1.5em)] w-[80%] text-center'> Everything you need to navigate the multi-chain ecosystem with confidence and efficiency. </p>
        </div>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[20px]'>
            { cards.map(card => (
                <Card key={card.id} { ...{ title: card.title, desc: card.desc } } />
            )) }
        </div>
    </section>
  )
}

export default FeaturesInfo
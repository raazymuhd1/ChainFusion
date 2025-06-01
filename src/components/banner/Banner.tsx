import React from 'react'
import { CustomButton } from "@/components"

const Banner = () => {
  return (
    <section className='xl:w-[60%] w-[90%] mx-auto grid grid-rows-[repeat(2,minmax(0,1fr))] gap-[10px] min-h-[300px] glass_bg p-[20px] rounded-[15px] mt-[170px] items-center '>
        <div className='w-full flex items-center flex-col gap-[10px]'>
            <h2 className='font-bold text-[clamp(1.5em,3em,3em)]'> Ready to Start Exploring? </h2>
            <p className='text-[clamp(1em,1.3em,1.5em)] text-[#9090a8]'> Join thousands of users already trading across chains with ChainFusion. </p>
        </div>
        <aside className='md:w-[70%] w-full h-[50px] mx-auto md:grid md:grid-cols-[repeat(3,minmax(200px,1fr))] flex flex-col items-center gap-[20px]'>
            <input 
                type="text" 
                placeholder='Enter your email' 
                className='py-[8px] min-h-[50px] w-full col-[1_/_span_2] bg-[#351a5c] px-[10px] rounded-[15px]' />
            <CustomButton styles='bg_gradients w-[30%] whitespace-nowrap h-[50px]' title="Get Early Access" />
        </aside>
    </section>
  )
}

export default Banner
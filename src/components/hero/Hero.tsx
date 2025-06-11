import React from 'react'
import { FaRegStar  } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { CustomButton } from "@/components"
import Link from 'next/link'

const Hero = () => {
  return (
    <section className={`min-h-[500px] mt-[90px]  flex flex-col gap-[50px]`}>
        
        <div className={`md:w-[20%] w-[80%] mx-auto flex items-center justify-center gap-[5px] rounded-[15px] glass_bg p-[5px]`}>
            {/* star */}
            <FaRegStar />
            <h4 className='text-[#9090a8]'> The Future of Cross-Chain DeFi </h4>
        </div>

        <div className={`md:w-[60%] w-[90%] mx-auto grid grid-cols-1 justify-items-center gap-[30px] relative before:absolute before:w-full before:h-full before:opacity-[.4] `}>
            <h2 className='text-[clamp(1em,10vw,4em)] font-extrabold'> Trade Across </h2>
            <h2 className='text-[clamp(1.5em,10vw,4em)] text-[var(--warning)] mt-[-40px] font-extrabold'> Any Blockchain </h2>
            <p className='text-center wrap-anywhere md:w-[70%] w-full text-[clamp(1em,1.3em,1.5em)] text-[#9090a8] '> ChainFusion enables seamless cross-chain DeFi operations while keeping your liquidity on a single chain. Bridge, trade, and stake across 15+ blockchains with unprecedented ease. </p>
        </div>

        {/* buttons */}
        <div className='flex items-center gap-[20px] md:w-[30%] w-[90%] mx-auto justify-center '>
            <Link href="/main">
                <CustomButton styles='bg_gradients opacity-[.8] hover:opacity-[1] transition-[opacity_1s]  p-[8px]' title="Start Exploring" Icon={FaArrowRightLong} />
            </Link>
            <CustomButton styles='bg-[var(--main-text-color)] text-[var(--main-color)] opacity-[.8] hover:opacity-[1] transition-[opacity_1s] p-[8px]' title="Watch Demo" />
        </div>
    </section>
  )
}

export default Hero
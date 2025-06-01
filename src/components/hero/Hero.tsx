import React from 'react'
import { FaRegStar  } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { CustomButton } from "@/components"

const Hero = () => {
  return (
    <section className={`min-h-[500px] mt-[90px]  flex flex-col gap-[50px]`}>
        
        <div className={`w-[20%] mx-auto flex items-center justify-center gap-[5px] rounded-[15px] glass_bg p-[5px]`}>
            {/* star */}
            <FaRegStar />
            <h4 className=''> The Future of Cross-Chain DeFi </h4>
        </div>

        <div className={`w-[60%] mx-auto grid grid-cols-1 justify-items-center gap-[10px]`}>
            <h2 className='text-[clamp(1.5em,4em,4em)] font-extrabold'> Trade Across </h2>
            <h2 className='text-[clamp(1.5em,4em,4em)] text-[#6ca54b] mt-[-40px] font-extrabold'> Any Blockchain </h2>
            <p className='text-center wrap-anywhere w-[70%] text-[clamp(1em,1.3em,1.5em)]'> ChainFusion enables seamless cross-chain DeFi operations while keeping your liquidity on a single chain. Bridge, trade, and stake across 15+ blockchains with unprecedented ease. </p>
        </div>

        {/* buttons */}
        <div className='flex items-center gap-[20px] w-[30%] mx-auto justify-center '>
            <CustomButton styles='bg_gradients opacity-[.8] hover:opacity-[1] transition-[opacity_1s] ' title="Start Exploring" Icon={FaArrowRightLong} />
            <CustomButton styles='glass_bg opacity-[.8] hover:opacity-[1] transition-[opacity_1s]' title="Watch Demo" />
        </div>
    </section>
  )
}

export default Hero
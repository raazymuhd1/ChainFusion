import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t-[1px] mt-[80px] flex flex-col gap-[10px] p-[20px] items-center w-full'>
        {/* logo */}
        <h3 className='font-bold text-[clamp(1em,1.4em,2em)]'> ChainFusion </h3>
        <p className='text-[#9090a8] text-center'> © 2025 ChainFusion. All rights reserved. Built for the future of DeFi. </p>
    </footer>
  )
}

export default Footer
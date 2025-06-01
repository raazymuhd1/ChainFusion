import React from 'react'
import { CustomButton } from "@/components"

const Nav = () => {
  return (
    <nav className='h-full w-[80%] mx-auto flex justify-between items-center'>
        {/* title * logo */}
        {/* logo */}
        <h2 className="font-extrabold  text-[clamp(1.1em,1.8em,2em)]"> ChainFusion  </h2>

        <CustomButton styles={`bg_gradients hover:translate-y-[-10px] transition-[transform,500ms]`} title='Launch App' />
    </nav>
  )
}

export default Nav
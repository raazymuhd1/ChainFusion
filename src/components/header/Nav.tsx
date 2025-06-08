
import React from 'react'
import { CustomButton } from "@/components"
import Link from 'next/link'
import { UserButton } from '@civic/auth-web3/react'

const Nav = () => {
  return (
    <nav className='h-full md:w-[80%] w-[90%] mx-auto flex justify-between items-center'>
        {/* title * logo */}
        {/* logo */}
        <h2 className="font-extrabold  text-[clamp(1.2em,6vw,2em)]"> ChainFusion  </h2>

        <Link href="/main">
            <CustomButton styles={`bg_gradients hover:translate-y-[-10px] transition-[transform,500ms]`} title='Launch App' />
            {/* <UserButton /> */}
        </Link>
    </nav>
  )
}

export default Nav
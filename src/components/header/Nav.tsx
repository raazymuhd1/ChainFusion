
import React from 'react'
import { CustomButton } from "@/components"
import Link from 'next/link'
import { UserButton } from '@civic/auth-web3/react'

const Nav = () => {
  return (
    <nav className='h-full md:w-[80%] w-[90%] mx-auto flex justify-between items-center border-b-[1px_var(--border-col)] rounded-[15px] p-[20px] nav_shadows'>
        {/* title * logo */}
        {/* logo */}
        <h2 className="font-extrabold  text-[clamp(1.2em,6vw,2em)]"> ChainFusion  </h2>

        <div className='h-[4px] w-[100px] nav_shadows bg-[var(--warning)]' />

        <Link href="/main">
            <CustomButton styles={`bg-[var(--warning)] hover:translate-y-[-10px] transition-[transform,500ms] p-[8px] `} title='Launch App' />
            {/* <UserButton /> */}
        </Link>
    </nav>
  )
}

export default Nav
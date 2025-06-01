import React from 'react'
import SidebarLinks from "./SidebarLinks"
import Link from "next/link"

const Sidebar = () => {
  return (
    <aside className={`w-[20%] bg-[#f94b78] h-screen sticky inset-0`}>
       <Link href="/" className='flex flex-col mt-[10px] w-full items-center gap-[6px] cursor-pointer'>
          <h2 className='text-[clamp(.5vw,2vw,2vw)] font-extrabold'> ChainFusion </h2>
          <p className="translate-y-[-10px]"> Cross-chain DeFi </p>
       </Link>

       <SidebarLinks />
    </aside>
  )
}

export default Sidebar
"use client"
import { useState } from 'react'
import { BiArrowToRight } from 'react-icons/bi'
import SidebarLinks from "./SidebarLinks"
import Link from "next/link"

const Sidebar = () => {
    const [sidebarWidth, updateSidebarWidth] = useState(0)

  return (
    <aside 
      className={`w-[20%] shadows translate-x-[${sidebarWidth}px] glass_orange  h-screen sticky inset-0 border-[1px] border-[var(--main-color)] backdrop-blur-[10px] `}>
       <div className='w-full flex items-center justify-end'>
          <Link href="/" className='flex flex-col mt-[10px] w-full items-center gap-[6px] cursor-pointer'>
              <h2 className='text-[clamp(.5vw,2vw,2vw)] font-extrabold'> ChainFusion </h2>
              <p className="translate-y-[-10px]"> Cross-chain DeFi </p>
          </Link>

          <BiArrowToRight
            onClick={() => updateSidebarWidth(-30)}
            className='w-[40px] h-[40px] translate-x-[10px] glass_bg cursor-pointer ' />
       </div>

       <SidebarLinks />
    </aside>
  )
}

export default Sidebar
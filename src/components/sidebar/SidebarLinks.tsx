import React from 'react'
import { sidebarLinks } from '@/constants'
import { IconType } from 'react-icons/lib'
import { GoHome } from "react-icons/go";
import { FiShoppingBag } from "react-icons/fi";
import { BiCoinStack } from "react-icons/bi";
import { MdOutlineSettings } from "react-icons/md";
import { LuArrowUpDown, LuArrowRightLeft  } from "react-icons/lu";

const SidebarLinks = () => {

    const handleActiveLinks = () => {

    }

    const handleSidebarLinks = (title: string, Icon: IconType) => {
        return (
            <div className='flex items-center gap-[10px] rounded-[15px] hover:bg-[#18191d] transition-[background_1s] cursor-pointer p-[20px] w-[80%]'>
                <Icon className='w-[20px] h-[20px]' />
                <h4 className='font-bold text-[clamp(.5vw,1.2vw,2vw)] '> { title } </h4>
            </div>
        )
    }

  return (
    <section className='w-full flex flex-col gap-[10px] items-center mt-[30px]'>
        { handleSidebarLinks("Dashboard", GoHome) }
        { handleSidebarLinks("Bridge", LuArrowRightLeft ) }
        { handleSidebarLinks("Swap", LuArrowUpDown) }
        { handleSidebarLinks("NFT Marketplace", FiShoppingBag) }
        { handleSidebarLinks("Staking", BiCoinStack) }
        { handleSidebarLinks("Settings", MdOutlineSettings) }
    </section>
  )
}

export default SidebarLinks
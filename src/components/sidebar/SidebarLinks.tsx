"use client"
import { useState } from 'react'
import { sidebarLinks } from '@/constants'
import Link from "next/link"

const SidebarLinks = () => {
    const [activeSidebar, setActiveSidebar] = useState(sidebarLinks);

    const handleActiveLinks = (linkId: number) => {
          const links = [...activeSidebar]
          const activeLink = links.find(link => link.id == linkId);

          links.forEach(link => {
               if(link.id == linkId) {
                   link.isActive = true
               } else {
                    link.isActive = false
               }
          })

          // if(typeof activeLink != "undefined" && typeof notActiveLink != "undefined" ) {
          //     activeLink.isActive = true;
              
          // }
        setActiveSidebar(links)
         
    }

    // const handleSidebarLinks = (title: string, Icon: IconType) => {
    //     return (
    //         <div className='flex items-center gap-[10px] rounded-[15px] hover:bg-[#18191d] transition-[background_1s] cursor-pointer p-[20px] w-[80%]'>
    //             <Icon className='w-[20px] h-[20px]' />
    //             <h4 className='font-bold text-[clamp(.5vw,1.2vw,2vw)] '> { title } </h4>
    //         </div>
    //     )
    // }

  return (
    <section className='w-full flex flex-col gap-[10px] items-center mt-[30px]'>
        {/* { handleSidebarLinks("Dashboard", GoHome) }
        { handleSidebarLinks("Bridge", LuArrowRightLeft ) }
        { handleSidebarLinks("Swap", LuArrowUpDown) }
        { handleSidebarLinks("NFT Marketplace", FiShoppingBag) }
        { handleSidebarLinks("Staking", BiCoinStack) }
        { handleSidebarLinks("Settings", MdOutlineSettings) } */}

        { activeSidebar.map(link => (
             <Link 
                onClick={() => handleActiveLinks(link.id)}
                key={link.id}
                href={link.url} className={`flex items-center gap-[10px] rounded-[15px] hover:bg-[#18191d] transition-[background_1s] cursor-pointer p-[20px] w-[80%] ${link.isActive == true && "bg-[var(--main-color)]"} `}>
                <link.Icon className='w-[20px] h-[20px]' />
                <h4 className='font-bold text-[clamp(18px,1vw,25px)] '> { link.title } </h4>
              </Link>
        )) }
    </section>
  )
}

export default SidebarLinks
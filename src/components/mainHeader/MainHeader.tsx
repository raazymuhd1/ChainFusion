"use client"
import { useState } from 'react'
import { CustomButton } from "@/components"

const MainHeader = () => {
    const [showAddress, setShowAddress] = useState(false)

  return (
    <header className='w-[80%] mx-auto h-[80px] sticky top-[10px] p-[15px] glass_bg rounded-[0] z-[2] shadows_orange flex items-center justify-end gap-[20px] shadows'>
       <CustomButton title={`Connect Wallet`} styles='bg-[var(--warning)] p-[10px]' />
       {/* user wallet */}
       <div className="flex items-center gap-[20px]">
          <p className={`${!showAddress && "hidden"} `}> user address </p>
          {/* copyable */}
       </div>
    </header>
  )
}

export default MainHeader
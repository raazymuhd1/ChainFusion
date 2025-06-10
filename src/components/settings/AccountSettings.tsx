import React from 'react'
import { MdOutlineSettings } from "react-icons/md";

const AccountSettings = () => {
  return (
    <div className='w-full flex flex-col gap-[25px] p-[20px] glass_bg rounded-[10px] mt-[40px]'>
        <aside className='flex items-center gap-[10px]'>
            <MdOutlineSettings className='w-[calc(1em+9px)] h-[25px] glass_bg' />
            <h3 className='font-bold text-[clamp(1vw,1.5vw,2vw)]'> Account Settings </h3>
        </aside>

        <aside className='w-full flex flex-col gap-[10px] '>
            <label> Wallet Address </label>
            <input type="text" placeholder='0x' className={`p-[15px] rounded-[10px] w-full border-[1px] glass_bg`} />
        </aside>

        <aside className='w-full flex flex-col gap-[10px]'>
            <label htmlFor='network' > Default Network </label>
            <select id="network" className='w-full border-[1px] glass_bg p-[15px] rounded-[10px]'>
                <option value="ethereum"> Ethereum </option>
                <option value="ethereum"> BSC </option>
                <option value="ethereum"> Arbitrum </option>
            </select>
        </aside>
    </div>
  )
}

export default AccountSettings
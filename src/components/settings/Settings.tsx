import React from 'react'
import AccountSettings from './AccountSettings'
import NotifSettings from "./NotifSettings"
import { CustomButton } from "@/components"

const Settings = () => {
  return (
    <div className={`p-[30px] w-full`}>
       <div className=''>
           <h2 className='font-extrabold text-[clamp(1vw,2vw,3vw)]'> Settings </h2>
           <p className='font-normal text-[clamp(.8vw,1,2vw,1.5vw)] text-[var(--grey-color)] '> Customize your ChainFusion experience </p>
       </div>

       <article className='w-full flex flex-col gap-[30px]'>
          <AccountSettings />
          <NotifSettings />
       </article>

       <CustomButton title="Save Changes" styles='py-[10px] px-[14px] bg-[var(--bg-gradients)]' />
    </div>
  )
}

export default Settings
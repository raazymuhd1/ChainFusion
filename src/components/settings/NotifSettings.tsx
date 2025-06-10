import React from 'react'
import { FaRegBell  } from "react-icons/fa";
import { notifSettings } from '@/constants';

const NotifSettings = () => {
  return (
    <section className='w-full flex flex-col gap-[20px] glass_bg p-[20px] rounded-[15px]'>
        <aside className='flex items-center gap-[10px]'>
            <FaRegBell  className='w-[calc(1em+9px)] h-[25px] glass_bg' />
            <h3 className='font-bold text-[clamp(1vw,1.5vw,2vw)]'> Notifications </h3>
        </aside>

        <article className='flex flex-col gap-[20px]'>
            { notifSettings.map(notif => (
                <aside
                    key={notif.id}
                    className='flex items-center justify-between w-full'>
                    <div className='grid grid-rows-[repeat(2,minmax(0,1fr))]'>
                        <h4 className='font-semibold'> {notif.title } </h4>
                        <p className='text-[var(--grey-color)]'> { notif.desc } </p>
                    </div>


                </aside>
            )) }
        </article>
    </section>
  )
}

export default NotifSettings
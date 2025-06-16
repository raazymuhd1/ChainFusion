import React from 'react'
import { CustomButton } from '@/components'
import Link from 'next/link'

const NotFound = () => {
  return (
    <section className='flex flex-col gap-[20px] w-full items-center'>
        <h2 className='font-extrabold text-[clamp(18px,1vw,25px)]'> This page is not found, please go back </h2>
         <Link href="/main">
            <CustomButton styles='p-[8px] bg-[var(--warning)]' title='Go Back' />
         </Link>
    </section>
  )
}

export default NotFound
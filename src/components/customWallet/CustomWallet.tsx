import React from 'react'
import { useConnect, useSwitchChain, useSwitchAccount } from 'wagmi'

const CustomWallet = () => {
     const connect = useConnect()
     const switchChain = useSwitchChain()

  return (
    <section className='fixed w-full h-screen inset-0'>
       
    </section>
  )
}

export default CustomWallet
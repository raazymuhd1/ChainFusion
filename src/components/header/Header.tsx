"use client"
import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="h-[80px] sticky z-[2] top-[20px]">
        <Nav />
    </header>
  )
}

export default Header
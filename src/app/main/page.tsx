import React from 'react'
import { Sidebar, Dashboard } from "@/components"

const Main = () => {
  return (
    <main className='flex w-full'>
        <Sidebar />
        <Dashboard />
    </main>
  )
}

export default Main
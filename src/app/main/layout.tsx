import React from 'react'
import { Sidebar } from "@/components"

const MainLayout = ({children}: { children: React.ReactNode}) => {
  return (
    <main className={`w-full flex`}>
        <Sidebar />
        {children}
    </main>
  )
}

export default MainLayout
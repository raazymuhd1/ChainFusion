import React from 'react'
import { Sidebar, MainHeader } from "@/components"

const MainLayout = ({children}: { children: React.ReactNode}) => {
  return (
    <main className={`w-full flex`}>
        <Sidebar />
        <div className="w-full">
          <MainHeader />
          {children}
        </div>
    </main>
  )
}

export default MainLayout
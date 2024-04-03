import React from 'react'
import { Navbar } from './_components/navbar'

interface ProtectedLayoutProps {
    children: React.ReactNode
}

const ProtectedLayout = ({children}: ProtectedLayoutProps) => {
  return (
    <div className='min-h-full w-full flex flex-col gap-y-10 items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500'>
        <Navbar/>
        {children}</div>
  )
}

export default ProtectedLayout
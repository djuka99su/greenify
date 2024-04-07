import React from 'react'

interface ProtectedLayoutProps {
    children: React.ReactNode
}

const ProtectedLayout = ({children}: ProtectedLayoutProps) => {
  return (
    <div className='min-h-full w-full flex flex-col gap-y-10 items-center justify-center bg-slate-100'>
        {children}</div>
  )
}

export default ProtectedLayout
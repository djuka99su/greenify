import { auth } from '@/auth'
import React from 'react'

const UserPage = async () => {

  const session = await auth()
  

  return (
    <div className="bg-secondary flex flex-col p-4 rounded-xl w-[400px] sm:w-[600px] shadow-sm text-center">
      <h2 className="text-2xl mb-5">User Info</h2>
      <div className="">
        <div className="flex justify-between">
          <span>Name:</span>
          <span>{session?.user.name} </span>
        </div>
        <div className="flex justify-between">
          <span>Email:</span>
          <span>{session?.user.email} </span>
        </div>
        <div className="flex justify-between">
          <span>Role:</span>
          <span>{session?.user.role} </span>
        </div>
        <div className="flex justify-between">
          <span>ID:</span>
          <span>{session?.user.id} </span>
        </div>
        <div className="flex justify-between">
          <span>2FA Enabled:</span>
          <span className={session?.user.isTwoFactorEnabled ? "px-2 bg-emerald-600 text-white rounded" : "px-2 bg-red-600 text-white rounded"}>{session?.user.isTwoFactorEnabled ? "true" : "false"}</span>
        </div>
      </div>
    </div>
  )
}

export default UserPage
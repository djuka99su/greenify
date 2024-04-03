import React from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const AdminPage = async () => {
  const session = await auth()

  return (
    <div>Admin Page</div>
  )
}

export default AdminPage
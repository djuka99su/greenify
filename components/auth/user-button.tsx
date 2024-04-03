"use client"

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { FaUser } from 'react-icons/fa'
import { useCurrentUser } from '@/hooks/use-current-user'
import { LogoutButton } from '@/components/auth/logout-button'
import { MdLogout } from "react-icons/md";

export const UserButton = () => {
    const user =useCurrentUser()

  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <Avatar>
                <AvatarImage src={user?.image || ""}/>
                <AvatarFallback>
                    <FaUser/>
                </AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-40' align='end'>
            <LogoutButton>
                <DropdownMenuItem>
                    <MdLogout className='h-4 w- mr-2'/> Logout
                </DropdownMenuItem>
            </LogoutButton>

        </DropdownMenuContent>
    </DropdownMenu>
  )
}

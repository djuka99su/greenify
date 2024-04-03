"use client";

import { logOut } from '@/actions/logout';

interface LogoutButtonProps {
    children?: React.ReactNode;
}

import React from 'react'

export const LogoutButton = ({children} : LogoutButtonProps) => {
  return (
    <span onClick={() => logOut()} className='cursor-pointer'>{children}</span>
  )
}

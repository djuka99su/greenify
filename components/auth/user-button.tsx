"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";
import { MdLogout, MdSettings } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import Link from "next/link";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ""} />
          <AvatarFallback>
            <IoPerson className="w-6 h-6" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 bg-slate-50" align="end">
        <Link href={"/user"}>
          <DropdownMenuItem>User</DropdownMenuItem>
        </Link>
        <Link href={"/settings"}>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </Link>
        <LogoutButton>
          <DropdownMenuItem>
            <MdLogout className="h-4 w-4 mr-2" /> Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

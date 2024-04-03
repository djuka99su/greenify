"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {

    const pathName = usePathname()
  return (
    <div className="bg-secondary flex flex-col sm:flex-row justify-between items-center p-4 rounded-xl w-4/5 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-x-2">
        <Button asChild variant={pathName === "/user" ? "default" : "outline"}>
          <Link href={"/user"}>User</Link>
        </Button>
        <Button asChild variant={pathName === "/admin" ? "default" : "outline"}>
          <Link href={"/admin"}>Admin</Link>
        </Button>
        <Button asChild variant={pathName === "/settings" ? "default" : "outline"}>
          <Link href={"/settings"}>Settings</Link>
        </Button>
      </div>
      <p><UserButton/></p>
    </div>
  );
};

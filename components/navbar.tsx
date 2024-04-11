"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { GrShop } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonOutline, IoSearch, IoToggle } from "react-icons/io5";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useCurrentUser } from "@/hooks/use-current-user";
import { UserButton } from "@/components/auth/user-button";

import { publicRoutes, links } from "@/routes";
import { SheetBucket, SheetNavbar } from "@/components/sheet-custom";
import { Input } from "@/components/ui/input";
import { useShoppingCart } from "@/context/shopping-cart-context";

import { useRouter } from "next/navigation";



const Navbar: React.FC = () => {
  const [searchState, setSearchState] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("")
  const pathName = usePathname();
  const { cartQuantity } = useShoppingCart();
  const user = useCurrentUser();
  const router = useRouter()

  const handleEnterDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if(search === "") {
        setSearchState(false)
        return
      }
      setSearchState(false);
      router.push(`/search/${search}`)
      setSearch("")
    }
  };

  return (
    <>
      <nav
        className={`py-5 xl:py-10 px-5 xl:px-28 flex justify-between items-center bg-slate-100`}
      >
        <div className="flex items-center gap-4">
          <div className="flex xl:hidden mt-1">
            <SheetNavbar>
              <GiHamburgerMenu className="h-6 w-6" />
            </SheetNavbar>
          </div>
          <Link
            href="/"
            className="font-bold text-3xl xl:text-5xl tracking-widest"
          >
            <span>greenify 🍃</span>
          </Link>
        </div>
        <div className="gap-24 font-bold hidden xl:flex">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="group transition duration-200 hover:text-emerald-500"
            >
              {link.name}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-emerald-500"></span>
            </Link>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          {cartQuantity > 0 && (
            <SheetBucket>
              <div className="transition-transform duration-200 ease-in-out hover:scale-110">
                <GrShop className="h-6 w-6" />
                <span className="bg-emerald-500 px-2 py-0.5 text-xs rounded-full absolute -mt-2 font-bold">
                  {cartQuantity}
                </span>
              </div>
            </SheetBucket>
          )}

          {user && <UserButton />}
          {(pathName.startsWith("/products") ||
            pathName.startsWith("/product") ||
            publicRoutes.includes(pathName)) &&
            !user && (
              <LoginButton mode="modal" asChild>
                <div className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110">
                  <IoPersonOutline className="h-6 w-6 " />
                </div>
              </LoginButton>
            )}
          {!searchState ? (
            <button
              onClick={() => setSearchState(true)}
              className="transition-transform duration-200 ease-in-out hover:scale-110 hidden xl:flex"
            >
              <IoSearch className="h-6 w-6" />
            </button>
          ) : (
            <Input onKeyDown={handleEnterDown} onChange={(e)=> setSearch(e.target.value)} value={search} placeholder="Search..." />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

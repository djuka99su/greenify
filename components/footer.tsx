import Link from "next/link";
import { links, linksCategory } from "@/routes";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <div className="w-full min-h-72 shadow shadow-emerald-500">
      <div className="w-4/5 h-full m-0 sm:m-auto">
        <div className="p-10 sm:p-10 flex justify-center flex-col sm:flex-row gap-5 sm:gap-20">
          <div className="space-y-4 w-full sm:w-96">
            <span className="font-bold text-3xl xl:text-4xl tracking-widest">
              greenify🍃
            </span>
            <p className="text-md text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.{" "}
            </p>
          </div>
          <div className="space-y-4 mt-2">
            <span className="font-bold text-lg text-emerald-500">
              Links
            </span>
            <ul className="font-bold text-slate-600 space-y-1 ml-2 sm:ml-0">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 mt-2">
            <span className="font-bold text-lg text-emerald-500">
              Categories
            </span>
            <ul className="font-bold text-slate-600 space-y-1 ml-2 sm:ml-0">
              {linksCategory.map((link) => (
                <li key={link.name}>
                  <Link
                    href={
                      link.href +
                      "/" +
                      link.name.toLowerCase().replace(" ", "-")
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 mt-2">
            <span className="font-bold text-lg text-emerald-500">
              Get in touch
            </span>
            <div className="flex gap-2 ml-2 sm:ml-0">
              <Link href={"/"} target="_blank">
                <FaTwitter className="w-6 h-6 text-slate-600 transition-transform ease-in-out duration-200 hover:scale-110" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/nemanja-djurdjevic-211805210/"
                target="_blank"
              >
                <FaLinkedinIn className="w-6 h-6 text-slate-600 transition-transform ease-in-out duration-200 hover:scale-110" />
              </Link>
              <Link href={"https://github.com/djuka99su"} target="_blank">
                <FaGithub className="w-6 h-6 text-slate-600 transition-transform ease-in-out duration-200 hover:scale-110" />
              </Link>
            </div>
            <form className="hidden xl:block" action="">
              <Label htmlFor="email" className="font-bold text-slate-600">
                Subscribe
              </Label>
              <div className="mt-2 flex flex-col xl:flex-row gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                />
                <Button variant={"custom"}>Subscribe</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <form className="p-4 block xl:hidden" action="">
        <Label htmlFor="email" className="font-bold text-slate-600">
          Subscribe
        </Label>
        <div className="mt-2 flex flex-col xl:flex-row gap-2">
          <Input id="email" type="email" placeholder="Enter email address" />
          <Button variant={"custom"}>Subscribe</Button>
        </div>
      </form>
      <hr className="w-4/5 xl:w-3/5 m-auto"/>
      <div className="w-full flex justify-center items-center">
        <p className="font-bold my-2 text-slate-600">
          © 2024. All rights are reserved
        </p>
      </div>
    </div>
  );
};

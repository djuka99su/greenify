import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export const Socials = () => {
  return (
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
  );
};

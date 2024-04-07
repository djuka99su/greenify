import React from "react";
import Image from "next/image";
import imgOne from "@/public/imgOne.png";
import Link from "next/link";

const SectionOne = () => {
  return (
    <main className="flex min-h-4/5 justify-center items-center">
      <div className="flex flex-col xl:flex-row justify-evenly">
        <div className="w-5/6 xl:w-3/6 p-0 xl:p-10 mt-10 xl:mt-28 mx-auto xl:mx-0  font-poppins font-bold tracking-wider text-center xl:text-left">
          <h1 className="text-4xl xl:text-6xl leading-tight xl:leading-relaxed ">
            Transform Your Home into Nature Heaven
          </h1>
          <p className="my-6 text-sm">
            Experience the future of Home Living with our natural design and
            moss products
          </p>
          <Link
            href="/products"
            className="bg-emerald-500 rounded text-white px-10 py-2 inline-block ml-0 xl:ml-4 rounded- transition-transform duration-200 ease-in-out hover:scale-110"
          >
            Shop now
          </Link>
        </div>
        <div className="flex flex-col justify-around items-center">
          <Image
            className="animate-spin-slow h-72 xl:h-96 w-72 xl:w-96 mt-20"
            src={imgOne}
            alt="Loading..."
          />
        </div>
      </div>
    </main>
  );
};

export default SectionOne;

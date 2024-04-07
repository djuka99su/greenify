"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const linksCategory = [
  { href: "/products", name: "Moss pictures" },
  { href: "/products", name: "Moss wall" },
  { href: "/products", name: "Moss Decorations" },
  { href: "/products", name: "Other" },
];

export const CategoryFilter = () => {
  const pathName = usePathname();

  if (pathName.split("/").length == 4) {
    return null;
  }

  return (
    <div>
      <h2 className="font-bold hidden xl:block">Categories</h2>
      <hr />
      <div className="hidden xl:flex flex-col gap-2 p-2">
        {linksCategory.map((link, i) => (
          <Link
            className="transition-transform hover:translate-x-1"
            href={link.href + "/" + link.name.toLowerCase().replace(" ", "-")}
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

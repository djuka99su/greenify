"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const BreadcrumbCustom = () => {
  const pathName = usePathname();
  const breadcrumbItems = pathName.split("/");
  breadcrumbItems.shift();
  return (
    <Breadcrumb>
      <BreadcrumbList className="justify-center xl:justify-start text-lg  xl:text-base">
        {/* <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator /> */}
        {breadcrumbItems.map((item, i) => (
          <div className="flex items-center gap-1.5 sm:gap-2.5" key={item}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href={`/${
                    i === 0
                      ? item
                      : i === 2
                      ? `${breadcrumbItems[i - 2]}/${
                          breadcrumbItems[i - 1]
                        }/${item}`
                      : `${breadcrumbItems[i - 1]}/${item}`
                  }`}
                >
                  {(item.charAt(0).toUpperCase() + item.slice(1))
                    .replace("-", " ")
                    .replace("-", " ")}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {i !== breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

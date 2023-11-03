"use client";
import { TSideMenuItem } from "@/config/sideMenu";
import { cn } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";

type TSideMenuProps = {
  navItems: TSideMenuItem[];
  logo?: React.ReactNode;
  children: React.ReactNode;
};

export function SideMenu({ navItems, logo, children }: TSideMenuProps) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <aside className={clsx("pr-6 py-6 text-white")}>
      <div className="grid place-content-start h-full items-center border-r-[.5px] border-slate-600 px-6 ">
        {logo && <div className="relative mx-auto w-[110px] my-4 h-[100px]">{logo}</div>}
        <div className="flex flex-col w-full">
          {navItems.map((link) => {
            const Icon = Icons[link.icon];
            return (
              <Link
                key={link.title}
                href={link.href}
                className={cn(
                  buttonVariants({ variant: "link" }),
                  pathname === link.href ? "bg-[#293649] text-white" : null
                )}
              >
                <Icon size="17px" />
                {link.title}
              </Link>
            );
          })}
        </div>
        {children}
      </div>
    </aside>
  );
}

import Header from "@/components/header";
import { Icons } from "@/components/icons";
import ProjectList from "@/components/projectList";
import { SideMenu } from "@/components/sideMenu";
import { sideMenuConfig } from "@/config/sideMenu";

import Image from "next/image";
import Link from "next/link";

export default async function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-auto flex h-screen max-w-[1600px] mx-auto">
      <SideMenu
        navItems={sideMenuConfig}
        logo={<Image fill priority alt="logo" src="/images/logo2.svg" />}
      >
        <div className="mt-5 w-full">
          <div className="mb-3 flex items-center justify-between border-b pb-3 border-b-slate-300 border-spacing-10">
            <Link rel="stylesheet" href="/projects">
              <span className="text-lg">Projects</span>
            </Link>
            <button>
              <Icons.add size="20px" color="white" />
            </button>
          </div>
          <ProjectList />
        </div>
      </SideMenu>
      <main className="py-6 w-full">
        <Header />
        {children}
      </main>
    </div>
  );
}

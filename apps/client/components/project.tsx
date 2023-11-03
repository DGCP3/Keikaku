"use client";
import { cn, generateColor } from "@/utils";
import { MoreHorizontal } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useParams } from "next/navigation";
import { TProject } from "./projectList";

export default function ProjectSideBar({ project, href }: { project: TProject } & LinkProps) {
  const { projectId } = useParams();

  return (
    <Link
      href={href}
      className={cn(
        "my-2 flex items-center text-sm justify-between rounded-md p-2 pl-4 text-gray-400 hover:bg-[#293649] hover:text-white",
        { "bg-[#293649] text-white": projectId === project.href }
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn("h-2 w-2 rounded-full ", {
            "bg-[#293649] text-red-200": projectId === project.href,
          })}
          style={{ backgroundColor: generateColor(project.name) }}
        ></span>
        {project.name}
      </div>
      <MoreHorizontal size="17px" />
    </Link>
  );
}

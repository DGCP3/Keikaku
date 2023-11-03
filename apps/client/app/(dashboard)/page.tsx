import ProjectAvatar from "@/components/projectAvatar";
import { Input } from "@/components/ui/input";
import { MOCK_PROJECT } from "@/mockServer/data";
import Link from "next/link";

export default function () {
  return (
    <main className="space-y-6">
      <div className="border-b-[.5px] border-slate-600 py-2 flex items-center justify-between">
        <div>
          <h2 className="text-md font-semibold">Your Projects</h2>
          <span className="text-slate-400">showing 4 of 10 project</span>
        </div>
        <Input type="search" placeholder="Search..." className="md:w-[100px] lg:w-[300px]" />
      </div>

      <section className="grid grid-cols-4 mt-6 gap-4">
        {MOCK_PROJECT.map((project, i) => (
          <Link
            href={`/projects/${project.href}`}
            key={i}
            className={`h-[100px] p-4 rounded-md text-white border group border-[#2C3244] bg-[#131C2E] hover:bg-gradient-to-b from-[#293649] to-[#293649,0)] `}
          >
            <div className="flex items-end h-full justify-between">
              {project.name} <ProjectAvatar name={project.name} className="self-start w-7" />
            </div>
            {/* <div className="text-xs hidden group-hover:block transition-all">
              Lorem ipsum dolor sit amet consectetur.
            </div> */}
          </Link>
        ))}
      </section>

      <section className="space-y-2">
        <h2>My tasks</h2>
        <div className="grid grid-cols-2 min-h-[200px] gap-4 ">
          <div className="border border-[#2C3244] p-4">
            <details className="space-y-2">
              <summary className="py-2 border-b-[0.5px] border-slate-500">
                Recently Assigned
              </summary>
              {["Add auth", "Fix navbar"].map((task, i) => (
                <div className="flex ml-4" key={i}>
                  <input type="checkbox" className="mr-2" />
                  <span className="p- block">{task}</span>
                </div>
              ))}
            </details>

            <details className="space-y-2">
              <summary className="py-2 border-b-[0.5px] border-slate-600">Due Today</summary>
              {/* // ? mock tasks */}
              {/* // ? replace loop over tasks */}
              {["Add auth", "Fix navbar"].map((task, i) => (
                <div className="flex ml-4" key={i}>
                  <input type="checkbox" className="mr-2" />
                  <span className="p- block" key={i}>
                    {task}
                  </span>
                </div>
              ))}
            </details>
          </div>
          <div className="border border-[#2C3244]"></div>
        </div>
      </section>
    </main>
  );
}

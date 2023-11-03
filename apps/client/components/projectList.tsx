import { MOCK_PROJECT } from "@/mockServer/data";
import ProjectSideBar from "./project";

export type TProject = (typeof MOCK_PROJECT)[number];

export default function ProjectList() {
  return (
    <div className="overflow-y-auto">
      {MOCK_PROJECT.map((project) => {
        return (
          <ProjectSideBar
            key={project.name + Math.random}
            project={project}
            href={`/projects/${project.href}`}
          />
        );
      })}
    </div>
  );
}

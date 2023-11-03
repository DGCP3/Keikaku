"use client";
import { ComponentProps } from "react";
import Jdenticon from "react-jdenticon";

type ProjectAvatarProps = {
  name: string;
} & ComponentProps<"div">;

function ProjectAvatar({ name, ...rest }: ProjectAvatarProps) {
  return (
    <div {...rest}>
      <Jdenticon value={name} />
    </div>
  );
}

export default ProjectAvatar;

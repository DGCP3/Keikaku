import { type IconName } from "@/components/icons";

export type TSideMenuItem = {
  title: string;
  href: string;
  icon: IconName;
  disabled: boolean;
};

export const sideMenuConfig: TSideMenuItem[] = [
  {
    title: "Home",
    href: "/",
    icon: "home",
    disabled: false,
  },
  {
    title: "Messages",
    href: "/messages",
    icon: "message",
    disabled: false,
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: "task",
    disabled: false,
  },
  {
    title: "Teams",
    href: "/teams",
    icon: "teams",
    disabled: false,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: "setting",
    disabled: false,
  },
];

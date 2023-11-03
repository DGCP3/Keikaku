import { IconName } from "@/components/icons";

type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;  
  links: {
    github: string;
  };
};

type Project = {
  name: string;
  href: string;
  desc: string;
};

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: IconName | (string & {})
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

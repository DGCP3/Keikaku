import {
  Bell,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Plus,
  Settings2,
  Users,
  type Icon as LucideIcon,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  task: ClipboardList,
  home: LayoutDashboard,
  message: MessageSquare,
  setting: Settings2,
  user: Users,
  bell: Bell,
  add: Plus,
  signOut: LogOut,
  teams: Users,
};

export type IconName = keyof typeof Icons;

"use client";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Icons } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown";

export default function Header() {
  return (
    <header className="flex items-center justify-end gap-5">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage
              className=" rounded-full w-10"
              src="https://avatars.githubusercontent.com/u/40803197?v=4"
              alt="@dgcp3"
            />
            <AvatarFallback>DG</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">dgcp3</p>
              <p className="text-xs leading-none text-muted-foreground">name@example.com</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex gap-2 px-2">
            <Icons.add size="15px" /> New Project
          </DropdownMenuItem>
          <DropdownMenuItem className="flex gap-2 px-2">
            <Icons.user size="15px" /> Teams
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex gap-2 px-2">
            <Icons.signOut size="15px" /> Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

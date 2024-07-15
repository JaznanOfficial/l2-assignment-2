"use client";

import { ChevronDownIcon, LogOut } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { GrDashboard } from "react-icons/gr";

const UserProfile = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            // onClick={() => setShowUserNav((prev) => !prev)}
            className="bg-white dark:bg-black flex items-center pl-1.5 rounded-full cursor-pointer shadow"
          >
            <ChevronDownIcon size={20} className="text-neutral-500" />
            <Avatar className="flex justify-center items-center">
              <AvatarFallback className="uppercase">{"UN"}</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 -left-10 bg-white">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/dashboard" className="flex items-center">
                <GrDashboard className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserProfile;

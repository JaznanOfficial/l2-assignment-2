"use client";

import { Heart, LogOut, Star, User } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { RiBillLine } from "react-icons/ri";

const UserProfile = () => {
  //   const userName = authUserInfo?.name.split(" ");
  //   const name = userName[0].slice(0, 1) + userName[1].slice(0, 1);
  const name = "M";

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex gap-2 items-center">
            <Avatar className="flex justify-center items-center">
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
            <p>Maria</p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 -left-10 bg-white">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Account settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <RiBillLine className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Heart className="mr-2 h-4 w-4" />
              <span>Refer a friend</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Star className="mr-2 h-4 w-4" />
              <span>Rate our service</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4 text-[#FF3546]" />
              <span className="text-[#FF3546]">Logout</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default UserProfile;

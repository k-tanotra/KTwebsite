"use client"
import { useState } from "react";
import { User, BriefcaseBusiness, GraduationCap, Phone, Menu, X } from 'lucide-react';
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/theme-toogle";
import { AvatarImg } from "./avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex justify-between items-center p-4">
      <ModeToggle />
      <div className="flex items-center space-x-4">
        <button onClick={toggleMenu} className="sm:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <NavigationMenu className={`${isOpen ? "block" : "hidden"} sm:flex absolute top-full right-0 bg-opacity-10 sm:static sm:bg-transparent`}>
          <NavigationMenuList className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <NavigationMenuItem>
              <Link href="/">
                <Button variant="outline" className="w-full h-full">
                  <div className="flex flex-row items-center space-x-2">
                    <User />
                    <h1>About Me</h1>
                  </div>
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/">
                <Button variant="outline" className="w-full h-full">
                  <div className="flex flex-row items-center space-x-2">
                    <BriefcaseBusiness />
                    <h1>Work</h1>
                  </div>
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/">
                <Button variant="outline" className="w-full h-full">
                  <div className="flex flex-row items-center space-x-2">
                    <GraduationCap />
                    <h1>Education</h1>
                  </div>
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/">
                <Button variant="outline" className="w-full h-full">
                  <div className="flex flex-row items-center space-x-2">
                    <Phone />
                    <h1>Contact</h1>
                  </div>
                </Button>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="sm:hidden">
              <AvatarImg />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden sm:block">
        <AvatarImg />
      </div>
    </div>
  );
}

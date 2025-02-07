
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
  import { ModeToggle } from "@/components/theme-toogle";
import { AvatarImg } from "./avatar";
import { User, BriefcaseBusiness, GraduationCap, Phone} from 'lucide-react';
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4">
    <ModeToggle />
    <NavigationMenu>
      <NavigationMenuList className="flex flex-row items-center space-x-4">
        <NavigationMenuItem>
            <Link href="/">
                <Button variant="outline" className="w-full h-full">
                    <div className="flex flex-row items-center space-x-2">
                        <User/>
                        <h1>About Me</h1>
                    </div>
            </Button>
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link href="/">
        <Button variant="outline" className="w-full h-full">
        <div className="flex flex-row items-center space-x-2">
            <BriefcaseBusiness/>
            <h1>Work</h1>
          </div>
          </Button>
        </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link href="/">
        <Button variant="outline" className="w-full h-full">
        <div className="flex flex-row items-center space-x-2">
            <GraduationCap/>
            <h1>Education</h1>
          </div>
          </Button>
        </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link href="/">
        <Button variant="outline" className="w-full h-full">
        <div className="flex flex-row items-center space-x-2">
            <Phone/>
            <h1>Contact</h1>
          </div>
          </Button>
        </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <AvatarImg/>
  </div>
  )
}

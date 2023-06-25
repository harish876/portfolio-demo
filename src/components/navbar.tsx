"use client";

import * as React from "react";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import IconHolder from "@/components/icon";
import Projects from "./projects";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { components as details, iconComponents } from "@/lib/constants";
import { MainNav } from "./main-nav";
export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Work Icon</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function MenuDropdown() {
    const router = useRouter()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icons.ganttChart className="w-6" />
          <span className="sr-only">Toggle Menu Item</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem  onClick={()=>router.push('#projects')}>
          {" "}
          <Link href="#" className="flex justify-between space-x-6">
            <p>Projects</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {" "}
          <Link href="#blog" className="flex justify-between space-x-6">
            <p>Blog</p>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function IconDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icons.briefcase className="w-6" />
          <span className="sr-only">Toggle Icon</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <span className="flex justify-around space-x-8">
            <p>Github</p>
            <Icons.gitHub className="h-4 w-4" />
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          {" "}
          <span className="flex justify-between space-x-6">
            <p>Linkedin</p>
            <Icons.linkedin className="h-4 w-4" />
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export const Profile = () => {
  return (
    <div className="flex space-x-1 align-middle text-center">
      <Button variant="ghost" className="py-6 px-2">
        <span className="flex space-x-1 pt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="h-6 w-6 mt-2"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
          </svg>
          <h2 className="pb-2 text-2xl font-extrabold tracking-normal lg:text-md text-slate-800 dark:text-slate-200">
            harish
          </h2>
          <h2 className="pt-1 text-2xl font-extrabold tracking-normal lg:text-md text-slate-500 dark:text-slate-500">
            gokul
          </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="h-6 w-6 mt-2"
          >
            <rect width="256" height="256" fill="none"></rect>
            <line
              x1="208"
              y1="128"
              x2="128"
              y2="208"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
            <line
              x1="192"
              y1="40"
              x2="40"
              y2="192"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></line>
          </svg>
        </span>
      </Button>
    </div>
  );
};

export function Sidebar() {
  return (
    <div className="flex space-x-3">
      <div className="hidden md:ml-auto md:flex md:items-center space-x-3">
        <IconHolder icons={iconComponents} />
      </div>
      <div className="md:hidden lg:w-0 flex">
        <MenuDropdown />
      </div>
      <div className="md:hidden lg:w-0 flex">
        <IconDropdown />
      </div>
      <ModeToggle />
    </div>
  );
}
export default function Navbar() {
  return (
    <nav>
      <div className="justify-between px-4 py-3 space-x-2 flex sm:justify-between items-center scroll-x h-18 md:space-x-4 md:px-14">
        <Profile />
        {/* <NavigationMenu className="hidden md:flex mx-2">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-4 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-4">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Icons.logo className="h-6 w-6" />
                        <div className="pt-0 justify-start">
                          <span className="flex pt-2 space-x-1">
                            <h2 className="pb-2 text-2xl font-extrabold tracking-normal lg:text-md text-slate-800 dark:text-slate-200">
                              Harish
                            </h2>
                            <h2 className="pb-2 text-2xl font-extrabold tracking-normal lg:text-md text-slate-500 dark:text-slate-500">
                              Gokul
                            </h2>
                          </span>
                        </div>
                        <p className="text-sm line-clamp-6 leading-tight text-muted-foreground">
                          Hi, My name is Harish Gokul. I am a Full stack
                          developer and a wannabe Tech Bro. I code in Javascript
                          and Typescript and dabble in a few other. I can see
                          you "memory efficient" / "performance matters" folks
                          shake your head. I have NO OPTION okay.All I have is
                          Concurrency and Worker Threads.Maybe I do.I will
                          update this once I learn Rust.Also did you check out
                          the new React Server Components?
                        </p>
                      </a>
                    </NavigationMenuLink>
                  <ListItem href="#work-experience" title="Work Experience">
                    I am an MTS-1 at Byjus currently. I work in collaboration with many
                    various teams to integrate payment systems and new product rollouts.
                    I work with a variety including AWS Batch/Lambda's , Kafka etc. 
                  </ListItem>
                  <ListItem href="#education" title="Education">
                    I have completed my B.Tech from Vellore Institute of
                    Technology, Vellore in Computer Science and Technology with
                    Specialization in Internet of Things with a CGPA of 9.2. I
                    know it doesn't matter but thats all I have to show for from
                    College.
                  </ListItem>
                  <ListItem href="#personal" title="Personal">
                    I am a Tamil Native,from Chennai. I love Basketball and
                    American Football. Yes, American Football. I love Hip Hop
                    music and consider myself as a halfway decent Music Head. I
                    am a Gym Bro as well , currently on a Gym Sabbatical due to
                    a lower back tweak. The comeback is going to be crazy, trust
                    me.
                  </ListItem>
                  <ListItem href="#tech-stuff" title="Tech Stuff">
                    I am predominantly a JS and a TS Developer. In this space I
                    love exploring Frontend frameworks like Next, Astro, Svelte
                    by building Non revenue generating side projects. I am very
                    interested in exploring GRPC and ProtoBufs. Expect some side
                    projects on this shortly. I am proficient in C++ and I am
                    plan to get decent at Rust in 2-3 months.
                  </ListItem>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#projects" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}
        <MainNav className="hidden md:flex mx-2"/>
        <Sidebar />
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

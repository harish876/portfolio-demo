"use client";

import { Metadata } from "next";
import Image from "next/image";

import * as React from "react";

import { Icons } from "@/components/icons";
import ListItem from "./list-item";

export const metadata: Metadata = {
  title: "About me",
  description: "Harish Gokul's About me section for Portfolio",
};

export default function AboutMe() {
  return (
    <>
      <div className="rounded-lg">
        <div className="relative h-fit flex-col items-center justify-center sm:grid lg:max-w-none lg:grid-cols-2 lg:px-0 rounded-lg">
          <div className="relative h-full flex-col p-0 md:p-10 dark:bg-gradient-to-b from-muted/50 to-muted dark:border-r lg:flex justify-start rounded-lg">
            <div className="relative my-auto mx-auto">
              <Image
                src="/profile.jpeg"
                width={1280}
                height={600}
                alt="Profile Pic"
                className="rounded-lg opacity-90 object-fill"
              />
            </div>
            <div className="hidden md:block">
              <Icons.logo className="mt-6 h-8 w-8" />
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
              <blockquote className="space-y-2 mx-auto mt-2 flex">
                <p className="text-md tracking-wide align-text-top md:block">
                  Hi, My name is Harish Gokul. I am a Full stack developer and a
                  wannabe Tech Bro. I code in Javascript and Typescript and
                  dabble in a few other. I can see you "memory efficient" /
                  "performance matters" folks shake your head. I have NO OPTION
                  okay.All I have is Concurrency and Worker Threads.Maybe I do.I
                  will update this once I learn Rust.Also did you check out the
                  new React Server Components?
                </p>
              </blockquote>
            </div>
          </div>
          <div className="relative h-full flex-col mt-8 md:px-5 lg:flex justify-start rounded-lg">
            <Description />
          </div>
        </div>
      </div>
    </>
  );
}

interface DescriptionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Description({}: DescriptionProps) {
  return (
    <div className="flex flex-col justify-between my-auto h-3/4 space-y-6">
      <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-slate-800 dark:text-slate-200 mt-3">
        About Me
      </h3>
      <ListItem href="" title="Work Experience" id="work-experience">
        I am an MTS-1 at Byjus currently. I work in collaboration with many
        various teams to integrate payment systems and new product rollouts. I
        work with a variety of Tech including AWS Batch/Lambda's , Kafka etc.
      </ListItem>
      <ListItem href="" title="Education" id="education">
        I have completed my B.Tech from Vellore Institute of Technology, Vellore
        in Computer Science and Technology with Specialization in Internet of
        Things with a CGPA of 9.2. I know it doesn't matter but thats all I have
        to show for from College.
      </ListItem>
      <ListItem href="" title="Personal" id="personal">
        I am a Tamil Native,from Chennai. I love Basketball and American
        Football. Yes, American Football. I love Hip Hop music and consider
        myself as a halfway decent Music Head. I am a Gym Bro as well ,
        currently on a Gym Sabbatical due to a lower back tweak. The comeback is
        going to be crazy, trust me.
      </ListItem>
      <ListItem href="" title="Tech Stuff" id="tech-stuff">
        I am predominantly a JS and a TS Developer. In this space I love
        exploring Frontend frameworks like Next, Astro, Svelte by building Non
        revenue generating side projects. I am very interested in exploring GRPC
        and ProtoBufs. Expect some side projects on this shortly. I am
        proficient in C++ and I plan to get decent at Rust in 2-3 months.
      </ListItem>
    </div>
  );
}

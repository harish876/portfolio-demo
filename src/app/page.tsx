import { Separator } from "@/components/ui/separator";
import AboutMe from "@/components/about-me";
import Projects from "@/components/projects";

export default async function Home() {
  return (
    <main className="container h-screen">
      <div className="mt-12">
        <AboutMe />
      </div>
      <div className="mt-12">
      <Separator className="w-full"/>
      </div>
      <div className="mt-8">
        {/* @ts-ignore */}
        <Projects />
      </div>
    </main>
  );
}

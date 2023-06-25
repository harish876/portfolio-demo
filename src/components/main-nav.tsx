import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Button variant="ghost">
        {" "}
        <Link
          href="#work-experience"
          className="text-sm font-medium transition-colors hover:text-primary w-auto"
        >
          About Me
        </Link>
      </Button>
      <Button variant="ghost">
        {" "}
        <Link
          href="#project"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Projects
        </Link>
      </Button>
      <Button variant="ghost">
        {" "}
        <Link
          href="#blog"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Blog
        </Link>
      </Button>
    </nav>
  );
}

import { ChevronDown, Circle, Plus, Star } from "lucide-react";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GET_PROJECTS } from "@/lib/queriesj";
import { Url } from "next/dist/shared/lib/router/router";
import dayjs from "dayjs";
import { Icons } from "./icons";

/* Example server component fetch example */
async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    return {
      error,
      status: "failure",
    };
  }
}

async function getProjectsUsingApollo() {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}` /* @todo add zod schema */,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({ resultCaching: false }),
  });
  // @ts-ignore
  try {
    const { data } = await client.query({
      query: GET_PROJECTS,
      variables: {
        name: "harish876",
        pinned: 7,
        languages: 3,
      },
      fetchPolicy: "no-cache",
    });
    const result = data?.user?.pinnedItems?.edges.map((edge: any) => {
      const { node } = edge;
      return {
        id: node?.id,
        name: node?.name,
        url: node?.url,
        description: node?.description,
        projectUrl: node?.homepageUrl,
        languages: node?.languages?.edges.map((edge: any) => edge?.node?.name),
        updatedAt: node?.updatedAt,
      };
    });
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
}

type ProjectCardProps = {
  id: String;
  name: String;
  description: String | null;
  url: Url;
  projectUrl: Url;
  languages: Array<String> | null;
  updatedAt: Date;
};

export default async function Projects() {
  const projects = await getProjectsUsingApollo();
  return (
    <div className="flex flex-col pb-12">
      <h3
        className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center my-8 text-slate-800 dark:text-slate-200"
        id="project"
      >
        Projects
      </h3>
      <div className="flex flex-col md:grid md:grid-cols-2 space-x-0 space-y-0 md:mb-12">
        {projects &&
          projects.map((project: ProjectCardProps) => {
            return (
              <div>
                <ProjectCard details={project} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
function ProjectCard({ details }: { details: ProjectCardProps }) {
  return (
    <Card className="mb-2 mr-2">
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>
            <Link target="_blank" href={details.url} className="hover:underline text-blue-600 dark:text-github">
              {details?.name}
            </Link>
          </CardTitle>
          <CardDescription>{details?.description}</CardDescription>
        </div>
        <div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
          {details.projectUrl && <Button variant="outline" className="w-auto">
            <Link href={details?.projectUrl}className="flex justify-center space-x-2 align-middle my-auto">
              <p>Website</p>
              <Icons.externalLink className="h-4 w-4 mt-[0.10rem]"/>
            </Link>
          </Button>}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            {/* @ts-ignore */}
            <Languages languages={details?.languages} />
          </div>
          {/* <div className="flex items-center">
              <Star className="mr-1 h-3 w-3" />
              20k
            </div> */}
          <div>{`Updated ${dayjs(details?.updatedAt).format(
            "MMMM YYYY"
          )}`}</div>
        </div>
      </CardContent>
    </Card>
  );
}

const Languages = ({ languages }: { languages: Array<string> }) => {
  const colorMapping: any = {
    typescript: "fill-sky-400 text-sky-400",
    javascript: "fill-yellow-400 text-yellow-400",
    rust: "fill-rust text-rust",
    default: "fill-primary text-primary",
  };
  const filterLanguagesApplicable = ["javascript", "typescript", "go", "rust"];
  return (
    <>
      {languages &&
        languages
          .filter((language) =>
            filterLanguagesApplicable.includes(language?.toLowerCase())
          )
          .map((language) => {
            return (
              <>
                <Circle
                  className={`mr-1 h-3 w-3 ${
                    colorMapping[language?.toLowerCase() || "default"]
                  }`}
                />
                {"   "}
                {language}
              </>
            );
          })}
    </>
  );
};

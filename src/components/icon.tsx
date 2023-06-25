import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type IconObject = {
    icon: string,
    className: string | null,
    link: string
}
export default function Icon({ icons }: { icons: IconObject[]}) {
  const IconPicker = (icon: string, className: string | null) => {
    switch (icon) {
      case "github":
        return <Icons.gitHub className={className || "w-6 cursor-pointer"} />;
      case "linkedin":
        return (
          <Icons.linkedin className={className || "w-6 cursor-pointer fill-primary-foreground "} />
        );
      default:
        return <></>;
    }
  };
  return (
    <>
      {icons &&
        icons.map((iconObject) => {
        const { icon , link } = iconObject
          const IconType = IconPicker(icon, null);
          return (
            <Button key={icon} variant="ghost" className="p-2">
              <Link
                target="_blank"
                href={link}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {IconType}
              </Link>
            </Button>
          );
        })}
    </>
  );
}

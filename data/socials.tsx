import { ReactNode } from "react";
import { TwitterLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Twitterlogo } from "@/components/Shared/Icons";

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/AnishDe12020",
    icon: <Twitterlogo color="#1DA1F2" />,
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/AnishDe12020",
    icon: <GitHubLogoIcon />,
  },
];

export default socials;

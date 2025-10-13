import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Chitrakathe",
  DESCRIPTION: "A blog for my photography and writing.",
  EMAIL: "sddhrthrt@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "A blog for my photography and writing.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Some thoughts I put into words.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "Possibly empty list. Or too long to list?",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/sddhrthrt",
  },
  {
    NAME: "Instagram",
    HREF: "https://instagram.com/sddhrthrt",
  },
];

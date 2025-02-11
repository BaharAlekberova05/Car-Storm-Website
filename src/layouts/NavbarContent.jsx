"use client";
import { FloatingNavbar } from "./FloatingNavbar";
export function NavbarContent() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      //   icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      //   icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Cars",
      link: "/cars",
      //   icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Blog",
      link: "/blog",
      //   icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      //   icon: (
      //     <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      //   ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNavbar navItems={navItems} />
    </div>
  );
}

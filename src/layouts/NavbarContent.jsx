"use client";
import { FloatingNavbar } from "./FloatingNavbar";
export function NavbarContent() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Cars",
      link: "/cars",
    },
    {
      name: "News",
      link: "/news",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNavbar navItems={navItems} />
    </div>
  );
}

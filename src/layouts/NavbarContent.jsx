"use client";
import { FloatingNavbar } from "./FloatingNavbar";
import { useTranslation } from "react-i18next"; 
import "../i18/i18";

export function NavbarContent() {
  const { t } = useTranslation();

  const navItems = [
    {
      name: t("home"),
      link: "/",
    },
    {
      name: t("about"),
      link: "/about",
    },
    {
      name: t("cars"),
      link: "/cars",
    },
    {
      name: t("news"),
      link: "/news",
    },
    {
      name: t("contact"),
      link: "/contact",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNavbar navItems={navItems} />
    </div>
  );
}

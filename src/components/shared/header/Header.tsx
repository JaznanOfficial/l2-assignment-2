"use client";

import { Button } from "@/components/ui/button";
import { navigationLinks } from "@/utils/data";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import UserProfile from "../user/UserProfile";

const Header = () => {
  const path = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const user = true;

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 w-full px-5 transition-all duration-300 ${
        isScrolled ? "backdrop-blur shadow-lg py-2" : "py-5 custom_md:py-8"
      }`}
    >
      <div className="custom_container flex   justify-between items-center w-full">
        <Link
          href="/"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Image
            src={"/images/header/logo.png"}
            className="w-full h-auto"
            width={150}
            height={60}
            alt={"logo"}
          />
        </Link>
        {/* Mobile menu icons */}
        <div onClick={handleClick} className="custom_md:hidden">
          <Menu />
        </div>
        <nav className="ml-auto hidden items-center gap-4 sm:gap-6 lg:gap-20 custom_1xl:gap-32 custom_md:flex">
          <div className="flex items-center gap-5 md:gap-10">
            {navigationLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className={`text-base font-medium ${
                  path === link.path
                    ? "text-secondary underline underline-offset-8"
                    : "text-text_color hover:secondary hover:underline underline-offset-8"
                }`}
                prefetch={false}
              >
                {link.name}
              </Link>
            ))}
          </div>
          {user ? (
            <UserProfile />
          ) : (
            <div className="flex items-center gap-2">
              <Button className="text-text_color bg-transparent border-0 text-base font-medium hover:bg-primary hover:text-white">
                <Link href="/login"> Log In</Link>
              </Button>
              <Button size="default" variant="default">
                <Link href="/signup"> Sign Up</Link>
              </Button>
            </div>
          )}
        </nav>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {openMenu && <MobileMenu setOpenMenu={setOpenMenu} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;

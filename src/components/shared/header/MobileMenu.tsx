// @ts-nocheck

import { Button } from "@/components/ui/button";
import { navigationLinks } from "@/utils/data";
import { motion as m } from "framer-motion";
import { ShieldCloseIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = ({ setOpenMenu }) => {
  const path = usePathname();
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 bg-black/40 flex justify-end z-[9999] custom_md:hidden"
    >
      <m.div
        // ref={ref}
        initial={{ x: "100%" }}
        animate={{ x: 0, transition: { duration: 0.4, delay: 0.3 } }}
        exit={{ x: "100%", transition: { duration: 0.4 } }}
        className="h-svh w-3/4 bg-white dark:bg-secondary p-4"
      >
        {/* Close button */}
        <div onClick={() => setOpenMenu(false)} className="flex justify-end">
          <ShieldCloseIcon />
        </div>
        <nav className="ml-auto  items-center gap-4 sm:gap-6 lg:20 custom_1xl:gap-32 flex flex-col pt-20">
          <div className="flex flex-col gap-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.id}
                href={link.path}
                className={`text-base font-medium  ${
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

          <div className="flex items-center gap-2 ">
            <Button className="text-text_color bg-transparent border-0 text-base font-medium hover:bg-primary hover:text-white">
              Log In
            </Button>
            <Button size="default" variant="default">
              Sign Up
            </Button>
          </div>
        </nav>
      </m.div>
    </m.div>
  );
};

export default MobileMenu;

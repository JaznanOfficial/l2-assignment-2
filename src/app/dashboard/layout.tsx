"use client";
import AdminSidebar from "@/components/dashboard/Admin/AdminSidebar";
import ProviderSidebar from "@/components/dashboard/Providers/ProviderSidebar";
import UserSidebar from "@/components/dashboard/User/UserSidebar";
import Notifications from "@/components/profile/Notifications";
import UserProfile from "@/components/profile/UserProfile";
import { TRootLayout } from "@/types/RootType";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";

type UserRole = "admin" | "user" | "provider";
const DashboardLayout = ({ children }: TRootLayout) => {
  const userRole = "provider" as UserRole;
  const [toggle, setToggle] = useState(false);
  const [broken, setBroken] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setBroken(window.matchMedia("(max-width: 800px)").matches);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-gradient-to-b from-[#CDE3FF]/25 to-[#5AA4FF]/25">
      <div className="flex ">
        <div className=" h-full">
          {userRole === "admin" && <AdminSidebar />}
          {userRole === "user" && <UserSidebar />}
          {userRole === "provider" && (
            <ProviderSidebar
              toggled={toggle}
              setToggled={setToggle}
              setBroken={setBroken}
            />
          )}
        </div>
        <div className="flex-1 relative w-full overflow-hidden">
          <header className="flex justify-between items-center bg-white shadow-md py-3 px-5 pr-8">
            <div>
              {broken && (
                <button
                  className="sb-button"
                  onClick={() => setToggle(!toggle)}
                >
                  <MenuIcon />
                </button>
              )}
            </div>
            <div className="flex gap-5 items-center">
              <Notifications />
              <UserProfile />
            </div>
          </header>

          <main className="m-5 relative z-10 ">{children}</main>
          <div className="absolute -bottom-20 -right-20 w-[207px] h-[207px] bg-[#589AEC] rounded-full z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

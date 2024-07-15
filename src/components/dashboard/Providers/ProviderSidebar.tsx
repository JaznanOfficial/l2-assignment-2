// @ts-nocheck

"use client";

import { providerSidebarData } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

const ProviderSidebar = ({ toggled, setToggled, setBroken }) => {
  const pathName = usePathname();

  const isActive = (path) => {
    if (path === "/dashboard") {
      return pathName === path;
    } else {
      return pathName.startsWith(path);
    }
  };

  return (
    <div style={{ display: "flex", height: "100svh", minHeight: "400px" }}>
      <Sidebar
        backgroundColor="#fff"
        onBreakPoint={setBroken}
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        customBreakPoint="800px"
      >
        <Link href="/">
          <Image
            src="/images/header/logo.png"
            alt="logo"
            width={136}
            height={100}
            className="mx-auto py-5"
          />
        </Link>
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                  color: active ? "#FFFFFF" : disabled ? "#f5d9ff" : "#252525",
                  backgroundColor: active ? "#0172FF" : undefined,
                  borderRadius: active ? "10px" : undefined,
                  margin: "10px 20px",
                  padding: "10px",
                  "&:hover": {
                    backgroundColor: "rgba(1, 114, 255, 0.8)", // 50% opacity
                    borderRadius: "10px",
                  },
                };
              }
            },
            icon: ({ active }) => {
              return {
                color: active ? "#FFFFFF" : "#252525",
              };
            },
          }}
        >
          {providerSidebarData.map((item) => {
            const { Icon } = item;
            return (
              <MenuItem
                key={item.id}
                icon={
                  <Icon
                    size={24}
                    color={isActive(item.link) ? "white" : item.color}
                    className={item.color}
                  />
                }
                active={isActive(item.link)}
                component={<Link href={item.link} />}
              >
                {item.title}
              </MenuItem>
            );
          })}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default ProviderSidebar;

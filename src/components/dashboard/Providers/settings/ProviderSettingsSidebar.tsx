// @ts-nocheck

"use client";

import { providerSettingsSidebarData } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

const ProviderSettingsSidebar = ({
  toggled,
  setToggled,
  setBroken,
  broken,
}) => {
  const pathName = usePathname();
  console.log(pathName, "pathname");

  return (
    <div
      style={{
        display: "flex",
        height: "70svh",
        minHeight: "400px",
      }}
    >
      <Sidebar
        backgroundColor="#fff"
        onBreakPoint={setBroken}
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        customBreakPoint="800px"
      >
        <Menu
          rootStyles={{
            marginTop: broken ? "20%" : "",
          }}
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                  color: active ? "#FFFFFF" : disabled ? "#f5d9ff" : "#252525",
                  backgroundColor: active ? "#0172FF" : undefined,
                  borderRadius: active ? "10px" : "10px",
                  border: active ? "0" : "1px solid #ddd",
                  margin: "10px 20px",
                  padding: "10px",
                  "&:hover": {
                    backgroundColor: "rgba(1, 114, 255, 0.8)", // 50% opacity
                    borderRadius: "10px",
                    color: "#FFFFFF",
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
          {providerSettingsSidebarData.map((item) => {
            const { Icon } = item;
            return (
              <MenuItem
                key={item.id}
                icon={
                  <Icon
                    size={24}
                    color={pathName === item.link ? "white" : item.color}
                    className={item.color}
                  />
                }
                active={pathName === item.link}
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

export default ProviderSettingsSidebar;

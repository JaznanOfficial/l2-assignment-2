"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export function Breadcrumbs() {
  const pathname = usePathname();
  const path = pathname.split("/").filter(Boolean); // Remove empty strings

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {path.map((segment, index) => (
          <div key={index}>
            <BreadcrumbItem>
              {index < path.length - 1 ? (
                <BreadcrumbLink href={`/${path.slice(0, index + 1).join("/")}`}>
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>
                  {segment.charAt(0).toUpperCase() + segment.slice(1)}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < path.length - 1 && "  /"}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

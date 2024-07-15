"use client";

import EmployeeSidebar from "@/components/dashboard/Providers/employees/EmployeesDetails/EmployeeSidebar";
import { Breadcrumbs } from "@/components/dashboard/common/BreadCrumbs";
import Heading from "@/components/dashboard/common/Heading";
import { TRootLayout } from "@/types/RootType";
import { ArrowBigLeftDash } from "lucide-react";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const EmployeeLayout = ({ children }: TRootLayout) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [broken, setBroken] = useState<boolean>(false);

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
    <div>
      <section className="bg-white h-full border-b border-slate-200 border-solid p-6 rounded-md">
        {broken && (
          <button className="sb-button" onClick={() => setToggle(!toggle)}>
            <ArrowBigLeftDash />
          </button>
        )}
        <Breadcrumbs />
        <Heading title="Juan Dela Cruz" />
      </section>
      <div className="flex ">
        <EmployeeSidebar
          toggled={toggle}
          setToggled={setToggle}
          setBroken={setBroken}
          broken={broken}
        />
        <div className="flex-1">
          {/* Breadcrumbs */}

          {children}
        </div>
      </div>{" "}
    </div>
  );
};

export default EmployeeLayout;

"use client";

import ProviderFinanceSidebar from "@/components/dashboard/Providers/finance/ProviderFinanceSidebar";
import { Breadcrumbs } from "@/components/dashboard/common/BreadCrumbs";
import Heading from "@/components/dashboard/common/Heading";
import { TRootLayout } from "@/types/RootType";
import { ArrowBigLeftDash } from "lucide-react";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const FinanceLayout = ({ children }: TRootLayout) => {
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
    <div>
      <section className="bg-white h-full border-b border-slate-200 border-solid p-6 rounded-md">
        {broken && (
          <button className="sb-button" onClick={() => setToggle(!toggle)}>
            <ArrowBigLeftDash />
          </button>
        )}
        <Breadcrumbs />
        <Heading title="Finance" />
      </section>
      <div className="flex ">
        <ProviderFinanceSidebar
          toggled={toggle}
          setToggled={setToggle}
          setBroken={setBroken}
          broken={broken}
        />
        <div className="flex-1 h-[70svh] overflow-y-auto bg-white ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FinanceLayout;

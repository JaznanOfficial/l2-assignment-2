"use client";

import Heading from "@/components/dashboard/common/Heading";
import CompanyDayOffLists from "@/components/dashboard/Providers/settings/companysDayOff/CompanyDayOffLists";

const CompanyDayOffSettingPage = () => {
  return (
    <section className="bg-white h-full  p-6 rounded-md">
      <div className="pb-5 rounded-md border-b border-solid border-slate-200 flex justify-between items-center">
        <Heading title=" Company Days Off" />
      </div>
      <div>
        <CompanyDayOffLists />
      </div>
    </section>
  );
};

export default CompanyDayOffSettingPage;

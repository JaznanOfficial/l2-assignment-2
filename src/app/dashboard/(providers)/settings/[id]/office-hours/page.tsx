import { Breadcrumbs } from "@/components/dashboard/common/BreadCrumbs";
import Heading from "@/components/dashboard/common/Heading";
import OfficeHoursLists from "@/components/dashboard/Providers/settings/officeHours/OfficeHoursLists";

const OfficeHoursSettingsPage = () => {
  return (
    <section className="bg-white h-full  p-6 rounded-md">
      <Breadcrumbs />
      <Heading title="Working Hours" />
      <div>
        <OfficeHoursLists />
      </div>
    </section>
  );
};

export default OfficeHoursSettingsPage;

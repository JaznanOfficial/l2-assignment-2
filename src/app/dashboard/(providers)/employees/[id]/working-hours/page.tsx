import WorkingHoursLists from "@/components/dashboard/Providers/employees/workingHours/WorkingHoursLists";
import { Breadcrumbs } from "@/components/dashboard/common/BreadCrumbs";
import Heading from "@/components/dashboard/common/Heading";

const WorkingHoursPage = () => {
  return (
    <section className="bg-white h-full  p-6 rounded-md">
      <Breadcrumbs />
      <Heading title="Working Hours" />
      <div>
        <WorkingHoursLists />
      </div>
    </section>
  );
};

export default WorkingHoursPage;

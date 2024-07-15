import DayOffLists from "@/components/dashboard/Providers/employees/DaysOff/DayOffLists";
import Heading from "@/components/dashboard/common/Heading";

const DayOffPage = () => {
  return (
    <section className="bg-white h-full  p-6 rounded-md">
      <div className="pb-5 rounded-md border-b border-solid border-slate-200 flex justify-between items-center">
        <Heading title="Days Off" />
      </div>
      <div>
        <DayOffLists />
      </div>
    </section>
  );
};

export default DayOffPage;

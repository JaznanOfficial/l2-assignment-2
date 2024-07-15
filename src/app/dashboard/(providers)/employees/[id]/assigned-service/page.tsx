import AssignedServiceList from "@/components/dashboard/Providers/employees/assignedService/AssignedServiceList";
import Heading from "@/components/dashboard/common/Heading";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

const AssignedServicePage = () => {
  return (
    <section className="bg-white h-full p-6 rounded-md">
      <div className="pb-5 rounded-md border-b border-solid border-slate-200 flex justify-between items-center">
        <Heading title="Assigned Service" />
        <Button
          className="w-fit"
          variant="default"
          // onClick={handleSubmit(onSubmit)}
        >
          <Save className="mr-2" /> Save
        </Button>
      </div>
      <div className="mt-5">
        <AssignedServiceList />
      </div>
    </section>
  );
};

export default AssignedServicePage;

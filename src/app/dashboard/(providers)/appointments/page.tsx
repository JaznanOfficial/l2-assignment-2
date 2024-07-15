import AllAppointmentsList from "@/components/dashboard/Providers/appoinments/AllAppoinmentsList";
import { Breadcrumbs } from "@/components/dashboard/common/BreadCrumbs";
import Heading from "@/components/dashboard/common/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

const AppointmentPage = () => {
  return (
    <section className="bg-white h-auto lg:h-[80vh] p-6 rounded-md ">
      <Breadcrumbs />
      <Heading title="Appointments" />
      {/* search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center border-t border-solid border-slate-200 py-5 gap-4">
        <div className="relative">
          <Input
            placeholder="Search"
            className="w-full md:w-[400px] mx-auto "
          />
          <div className="absolute inset-y-0 right-0  flex items-center pointer-events-none">
            <Button variant="default">Search</Button>
          </div>
        </div>
        <Button className="w-fit" variant="default">
          <Plus className="mr-2" /> New appointment
        </Button>
      </div>
      {/* table */}

      <AllAppointmentsList />
    </section>
  );
};

export default AppointmentPage;

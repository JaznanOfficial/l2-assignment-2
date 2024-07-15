import Heading from "@/components/dashboard/common/Heading";
import AllHistoryLists from "@/components/dashboard/Providers/finance/history/AllHistoryLists";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HistoryPage = () => {
  return (
    <section className="bg-white h-full  p-6 rounded-md">
      <Heading title="History" />
      <div className="flex md:flex-row gap-5 flex-col md:justify-between md:items-center  border-t border-solid border-slate-200 py-5">
        <div className="relative">
          <Input
            placeholder="Search"
            className="w-full md:w-[400px] mx-auto "
          />
          <div className="absolute inset-y-0 right-0  flex items-center pointer-events-none">
            <Button variant="default">Search</Button>
          </div>
        </div>
      </div>
      <AllHistoryLists />
    </section>
  );
};

export default HistoryPage;

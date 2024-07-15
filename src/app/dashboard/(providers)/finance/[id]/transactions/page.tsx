import AllTransactionsLists from "@/components/dashboard/Providers/finance/transactions/AllTransactionsLists";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TransactionsPage = () => {
  return (
    <section className="bg-white h-full  p-6 rounded-md">
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
      <AllTransactionsLists />
    </section>
  );
};

export default TransactionsPage;

"use client";
import Heading from "@/components/dashboard/common/Heading";
import PaginationPrimary from "@/components/dashboard/common/Pagination";
import AllSpecialDaysLists from "@/components/dashboard/Providers/employees/specialDays/AllSpecialDaysLists";

const SpecialDayPage = () => {
  const arr = [1, 2, 3];
  return (
    <section className="bg-white h-full  p-6 rounded-md">
      <Heading title="Special Day" />
      {/* Here will be a map for special day */}
      <AllSpecialDaysLists />
      {/* Pagination */}

      <PaginationPrimary count={2} setPage={10} page={1} size={5} />
    </section>
  );
};

export default SpecialDayPage;

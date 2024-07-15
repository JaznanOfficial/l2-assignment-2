"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EditCategory from "./EditCategory";
import PaginationPrimary from "../../common/Pagination";

const CategoryLists = () => {
  const invoices = [1, 2, 3, 4, 5];
  return (
    <div>
      {/* table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Category</TableHead>
            <TableHead className="text-right mr-3">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={invoice}>
              <TableCell className="font-medium">Category {index}</TableCell>

              <TableCell className="text-right">
                <div className="flex gap-5 items-center justify-end">
                  {/* Edit modal */}
                  <EditCategory />
                  <p className="text-[#FB001D] capitalize font-medium text-base">
                    Delete
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-end">
        <PaginationPrimary page={1} setPage={() => {}} count={10} size={5} />
      </div>
    </div>
  );
};

export default CategoryLists;

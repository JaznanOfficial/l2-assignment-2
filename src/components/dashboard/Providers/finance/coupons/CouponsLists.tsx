"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import PaginationPrimary from "@/components/dashboard/common/Pagination";

const CouponsLists = () => {
  const invoices = [1, 2, 3, 4, 5];
  return (
    <div>
      {/* table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Coupon code</TableHead>
            <TableHead>Discount</TableHead>
            <TableHead>Per user</TableHead>
            <TableHead>Usage</TableHead>
            <TableHead>Services</TableHead>
            <TableHead>Valid until</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice,) => (
            <TableRow key={invoice}>
              <TableCell className="font-medium">fdagwe4g</TableCell>

              <TableCell className="font-medium">50%</TableCell>
              <TableCell className="font-medium">1</TableCell>
              <TableCell className="font-medium">0/10</TableCell>
              <TableCell className="font-medium">All service</TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                2024-03-21
              </TableCell>

              <TableCell className="text-right">
                <div>
                  <div className="flex gap-5 items-center justify-center">
                    <Link
                      href={"/dashboard/employees/1"}
                      className="text-[#2A8DE4] capitalize font-medium text-base"
                    >
                      Edit
                    </Link>
                    <p className="text-[#FB001D] capitalize font-medium text-base">
                      Delete
                    </p>
                  </div>
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

export default CouponsLists;

"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PaginationPrimary from "../../common/Pagination";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import EmployeesDetails from "./EmployeesDetails";
import Link from "next/link";

const EmployeesLists = () => {
  const [showDetails, setShowDetails] = useState(false);
  const invoices = [1, 2, 3, 4, 5];
  return (
    <div>
      {/* table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={invoice}>
              <TableCell className="font-medium">
                Juan Dela Cruz {index}
              </TableCell>
              <TableCell className="font-medium">
                juandelacruz@gmail.com
              </TableCell>
              <TableCell className="font-medium">+63 25364729</TableCell>
              <TableCell className="font-medium">Manger</TableCell>
              <TableCell className="font-medium flex items-center gap-2">
                <span className="size-2 rounded-full bg-red-500 block"></span>{" "}
                <span>Offline</span>
              </TableCell>

              <TableCell className="text-right">
                <div>
                  <div className="flex gap-5 items-center justify-center">
                    <p
                      onClick={() => setShowDetails(true)}
                      className="text-[#00C444] capitalize font-medium text-base"
                    >
                      See details
                    </p>
                    <Link
                      href={"/dashboard/employees/1"}
                      className="text-[#2A8DE4] capitalize font-medium text-base"
                    >
                      Edit
                    </Link>
                    <p className="text-[#FB001D] capitalize font-medium text-base">
                      Delete
                    </p>
                    <p className="text-[#F18B00] capitalize font-medium text-base">
                      Block
                    </p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Appointments Details */}
      <AnimatePresence>
        {showDetails && <EmployeesDetails setShowDetails={setShowDetails} />}
      </AnimatePresence>
      {/* Pagination */}
      <div className="flex justify-end">
        <PaginationPrimary page={1} setPage={() => {}} count={10} size={5} />
      </div>
    </div>
  );
};

export default EmployeesLists;

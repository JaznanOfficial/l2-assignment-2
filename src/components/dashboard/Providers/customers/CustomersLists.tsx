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
import CustomersDetails from "./CustomerDetails";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const CustomersLists = () => {
  const [showDetails, setShowDetails] = useState(false);
  const invoices = [1, 2, 3, 4, 5];
  return (
    <div>
      {/* Filter */}
      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="bookingDate">Booking Date</SelectItem>
            <SelectItem value="payment">Payment</SelectItem>
            <SelectItem value="service">Service</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={invoice}>
              <TableCell className="font-medium">Category {index}</TableCell>
              <TableCell className="font-medium">Category {index}</TableCell>
              <TableCell className="font-medium">Category {index}</TableCell>

              <TableCell className="text-right">
                <div>
                  <div className="flex gap-5 items-center justify-center">
                    <p
                      onClick={() => setShowDetails(true)}
                      className="text-[#00C444] capitalize font-medium text-base"
                    >
                      See details
                    </p>
                    {/* <p className="text-[#2A8DE4] capitalize font-medium text-base">
                      Edit
                    </p> */}
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
        {showDetails && <CustomersDetails setShowDetails={setShowDetails} />}
      </AnimatePresence>
      {/* Pagination */}
      <div className="flex justify-end">
        <PaginationPrimary page={1} setPage={() => {}} count={10} size={5} />
      </div>
    </div>
  );
};

export default CustomersLists;

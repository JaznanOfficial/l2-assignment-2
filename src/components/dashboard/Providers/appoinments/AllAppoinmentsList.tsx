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
import AppointmentDetails from "./AppionmentDetails";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const AllAppointmentsList = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      {/* table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Service needed</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Fee</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell className="text-center">
                <div className="flex gap-5 items-center justify-center">
                  <p
                    onClick={() => setShowDetails(true)}
                    className="text-[#00C444] capitalize font-medium text-base"
                  >
                    see details
                  </p>
                  <p className="text-[#2A8DE4] capitalize font-medium text-base">
                    Pending
                  </p>
                  <p className="text-[#FB001D] capitalize font-medium text-base">
                    Delete
                  </p>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Appointments Details */}
      <AnimatePresence>
        {showDetails && <AppointmentDetails setShowDetails={setShowDetails} />}
      </AnimatePresence>
      {/* Pagination */}
      <div className="flex justify-end">
        <PaginationPrimary page={1} setPage={() => {}} count={10} size={5} />
      </div>
    </div>
  );
};

export default AllAppointmentsList;

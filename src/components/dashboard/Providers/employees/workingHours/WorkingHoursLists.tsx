import Toggle from "@/components/dashboard/common/Toggle";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar, Copy, Trash } from "lucide-react";
import AddPeriodModal from "./AddPeriodModal";
import EditPeriodModal from "./EditPeriodModal";

const WorkingHoursLists = () => {
  const invoices = [1, 2, 3, 4, 5];
  return (
    <div>
      {/* table */}
      <div className="bg-[#FAFAFA] flex justify-between items-center px-4 py-3">
        <p className="text-black flex gap-2">
          <Calendar /> <span>Monday</span>
        </p>
        <Toggle />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Location</TableHead>
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
                    <EditPeriodModal />
                    <p className="text-[#FB001D] capitalize font-medium text-base flex items-center">
                      <Trash className="mr-2" /> Delete
                    </p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Button */}
      <div className="flex gap-5 justify-end mt-3">
        {/* Add period modal here */}
        <AddPeriodModal />
        <Button variant="outline">
          {" "}
          <Copy className="mr-2" /> Apply to other days
        </Button>
      </div>
    </div>
  );
};

export default WorkingHoursLists;

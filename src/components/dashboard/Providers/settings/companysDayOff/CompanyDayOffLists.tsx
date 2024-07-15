import { Input } from "@/components/ui/input";
import { Calendar, Trash } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import AddCompanyDayOff from "./AddCompanyDayOff";
import EditCompanyDayOff from "./EditCompanyDayOff";

const CompanyDayOffLists = () => {
  const invoices = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex  border-solid border-slate-300 border rounded-md items-center pr-2">
          <Input
            className="w-[130px] text-base"
            type="text"
            defaultValue="2024"
            placeholder="Year"
          />
          <Calendar />
        </div>
        <AddCompanyDayOff />
      </div>
      {/* table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Day off name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice}>
              <TableCell className="font-medium">Vacation 2024</TableCell>
              <TableCell className="font-medium">
                June 6, 2024 - June 7, 2024
              </TableCell>

              <TableCell className="text-right">
                <div>
                  <div className="flex gap-5 items-center justify-center">
                    <EditCompanyDayOff />
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

      {/* <div className="flex gap-5 justify-end mt-3">
     
        <AddPeriodModal />
        <Button variant="outline">
          {" "}
          <Copy className="mr-2" /> Apply to other days
        </Button>
      </div> */}
    </div>
  );
};

export default CompanyDayOffLists;

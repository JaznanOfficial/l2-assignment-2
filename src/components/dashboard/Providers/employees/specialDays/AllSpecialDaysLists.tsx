import { Input } from "@/components/ui/input";
import { Calendar, Clock, Trash } from "lucide-react";
import AddSpecialDaysModal from "./AddSpecialDays";
import { MdOutlineLocationOn, MdSettingsInputAntenna } from "react-icons/md";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EditSpecialDaysModal from "./EditSpecialDays";

const AllSpecialDaysLists = () => {
  const invoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
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
        <AddSpecialDaysModal />
      </div>
      <div className="max-h-[400px] overflow-scroll overflow-x-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F0F0F0] hover:bg-[#F0F0F0]">
              <TableHead className="font-semibold text-black/85" colSpan={3}>
                March 20, 2024
              </TableHead>

              <TableHead>
                <div className="flex gap-5 items-center justify-center">
                  <EditSpecialDaysModal />
                  <p className="text-[#FB001D] capitalize font-medium text-base flex items-center">
                    <Trash className="mr-2" /> Delete
                  </p>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice}>
                <TableCell className="font-medium">
                  <div className=" flex items-center gap-2">
                    <Clock size={16} />
                    <span>8:00 am - 10:00 am</span>
                  </div>
                </TableCell>
                <TableCell colSpan={2} className="font-medium">
                  <div className=" flex items-center gap-2">
                    <MdOutlineLocationOn size={16} />
                    <span>Default location</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div className=" flex items-center gap-2">
                    <MdSettingsInputAntenna size={16} />
                    <span>All assigned services</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllSpecialDaysLists;

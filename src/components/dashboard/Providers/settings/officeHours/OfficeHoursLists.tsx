import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar, Copy, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import AddOfficeHours from "./AddOfficeHours";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import EditOfficeHours from "./EditOfficeHours";

const OfficeHoursLists = () => {
  const invoices = [1, 2];
  return (
    <div>
      {/* table */}
      <div className="bg-[#FAFAFA] flex justify-between items-center px-4 py-3">
        <p className="text-black flex gap-2">
          <Calendar /> <span>Monday</span>
        </p>
        <Switch />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Start</TableHead>
            <TableHead>Finish</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice}>
              <TableCell className="font-medium">
                <div className="flex gap-20 items-center">
                  <p className="text-secondary capitalize">start</p>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TableCell>
              <TableCell className="font-medium">
                {" "}
                <div className="flex gap-20 items-center">
                  <p className="text-secondary capitalize">Finish</p>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TableCell>

              <TableCell className="text-right">
                <div>
                  <div className="flex gap-5 items-center justify-center">
                    <EditOfficeHours />
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
        <AddOfficeHours />
        <Button variant="outline">
          <Copy className="mr-2" /> Apply to other days
        </Button>
      </div>
    </div>
  );
};

export default OfficeHoursLists;

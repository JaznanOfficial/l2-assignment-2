import Toggle from "@/components/dashboard/common/Toggle";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const AssignedServiceList = () => {
  const invoices = [1, 2, 3, 4, 5];
  return (
    <div>
      {/* table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">
              <Toggle />
            </TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={invoice}>
              <TableCell className="w-[100px]">
                <Toggle />
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex gap-2 items-center">
                  <Image
                    src="/face.png"
                    alt="Avatar"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                  <span>Oil Change</span>
                </div>
              </TableCell>
              <TableCell className="font-medium">Category {index}</TableCell>
              <TableCell className="font-medium">Category {index}</TableCell>
              <TableCell className="font-medium">Category {index}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AssignedServiceList;

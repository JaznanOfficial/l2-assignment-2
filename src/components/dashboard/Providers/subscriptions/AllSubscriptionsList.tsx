import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PaginationPrimary from "../../common/Pagination";

const AllSubscriptionsList = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      {/* table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Plan</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {arr.map((invoice, index) => (
            <TableRow key={invoice}>
              <TableCell className="font-medium">
                Professional {index}
              </TableCell>
              <TableCell className="font-medium">2024-03-21</TableCell>
              <TableCell className="font-medium">2024-04-21</TableCell>
              <TableCell className="font-medium">$100.00</TableCell>
              <TableCell className="font-medium">Ongoing</TableCell>

              <TableCell className="text-right">
                <div>
                  <div className="flex gap-5 items-center justify-center">
                    <p className="text-[#2A8DE4] capitalize font-medium text-base">
                      Subscribe again
                    </p>
                    {/* <p className="text-[#FB001D] capitalize font-medium text-base">
                      Cancel subscription
                    </p> */}
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end">
        <PaginationPrimary count={5} setPage={10} page={1} size={5} />
      </div>
    </div>
  );
};

export default AllSubscriptionsList;

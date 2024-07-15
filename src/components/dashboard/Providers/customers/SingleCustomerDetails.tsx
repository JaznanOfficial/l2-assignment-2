import Details from "@/components/bookings/reviewAndPayment/Details";
import DetailsHeading from "@/components/bookings/reviewAndPayment/DetailsHeading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SingleCustomerDetails = () => {
  const data = [1, 2, 3];
  return (
    <div className="p-10">
      {/* Customer details */}
      <div className="">
        <DetailsHeading heading={"Personal details"} />
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-4 mb-8">
          <Details title={"Name"} text={"John Doe"} />
          <Details title={"Email"} text={"email@gmail.com"} />
          <Details title={"Phone"} text={"25541421"} />
          <Details title={"Address"} text={"address"} />
        </div>
      </div>
      {/* Schedule details */}
      <div className="">
        <DetailsHeading heading={"Appointments details"} />
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 mt-4 mb-8">
          <Details title={"Most appointments with:"} text={"Juan Dela Cruz"} />
          <Details title={"Favorite service:"} text={"Oil Change"} />
          <Details title={"Total payments:"} text={"$ 130.00 (5 payments)"} />
        </div>
      </div>

      {/* Cart details */}
      <div className="">
        <DetailsHeading heading={"Previously booked services"} />
        {/* SERVICE table data */}
        <div className="h-[200px] overflow-y-auto">
          <Table className=" h-full">
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Fee</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map((cart, index) => (
                <TableRow key={index}>
                  <TableCell>{"cart.name"}</TableCell>
                  <TableCell>Category 1</TableCell>
                  <TableCell>2024-03-21</TableCell>
                  <TableCell className="text-right">$30.00</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>{" "}
        </div>
      </div>
      {/* Reviews given */}
      <div className="mt-6">
        <DetailsHeading heading={"Reviews given"} />
        {/* Review table data */}
        <div className="h-[200px] overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Review</TableHead>
                <TableHead>Service</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.map((cart, index) => (
                <TableRow key={index}>
                  <TableCell>2024-03-21</TableCell>
                  <TableCell>
                    Lorem ipsum dolor omit Lorem ipsum dolor omitLorem ipsum
                    dolor omit Lorem ipsum dolor omit
                  </TableCell>
                  <TableCell>Oil Change</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default SingleCustomerDetails;

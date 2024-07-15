import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CustomerDetails = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 ">
      <div>
        <Label className="text-base">Name</Label>
        <Input
          type="text"
          placeholder="Enter your name"
          className="w-full text-base"
        />
      </div>

      <div>
        <Label className="text-base">Email</Label>
        <Input
          type="text"
          placeholder="Enter email"
          className="w-full text-base"
        />
      </div>

      <div>
        <Label className="text-base">Phone</Label>
        <Input
          type="text"
          placeholder="Enter phone"
          className="w-full text-base"
        />
      </div>
      <div className="">
        <Label className="text-base">Note</Label>
        <Input
          type="text"
          placeholder="Enter Mileage"
          className="w-full text-base"
        />
      </div>
    </div>
  );
};

export default CustomerDetails;

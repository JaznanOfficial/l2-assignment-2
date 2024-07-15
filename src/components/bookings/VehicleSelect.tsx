import { Button } from "../ui/button";
import { Input } from "../ui/input";

const VehicleSelect = () => {
  return (
    <div className="max-w-5xl mx-auto">
      {" "}
      <div>
        {/* <h2 className="text-3xl font-semibold mb-4 font-nunito text-center">
          Select a <span className="text-primary">Vehicle Number</span>
        </h2> */}
        <div className="flex justify-between items-center border-b border-solid border-slate-200 px-5 pb-2 mb-5 gap-8">
          <Input
            type="text"
            placeholder="Search"
            className="w-full text-base"
          />
          <Button>Select Vehicle</Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleSelect;

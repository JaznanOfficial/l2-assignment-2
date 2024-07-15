import CustomArrayFields from "@/components/shared/CustomFormProvider/CustomArrayFields";
import CustomFromProvider from "@/components/shared/CustomFormProvider/CustomFormProvider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { FieldValues, SubmitHandler } from "react-hook-form";

const EditAddons = () => {
  const defaultValue = {
    addOns: [{ name: "foo1", price: "bar1" }],
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("Form data:", data);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="text-[#2A8DE4] capitalize font-medium text-base">Edit</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] max-h-[600px] md:max-h-[800px] overflow-x-hidden overflow-y-auto">
        <DialogHeader className="text-center mb-6 py-5 border-b border-solid border-slate-300">
          <DialogTitle className="text-xl font-bold text-center">
            Edit Addons
          </DialogTitle>
        </DialogHeader>
        <div>
          {/* Add-ons */}{" "}
          <CustomFromProvider defaultValues={defaultValue} onSubmit={onSubmit}>
            <div className="">
              <h3 className="text-black/85 font-medium text-base mb-3">
                Edit Add-ons
              </h3>

              <CustomArrayFields />
            </div>
            <div className="flex justify-end gap-3">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" variant="default">
                Submit
              </Button>
            </div>
          </CustomFromProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditAddons;

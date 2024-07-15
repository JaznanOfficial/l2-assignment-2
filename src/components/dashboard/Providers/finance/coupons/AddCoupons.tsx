import CustomFromProvider from "@/components/shared/CustomFormProvider/CustomFormProvider";
import CustomInput from "@/components/shared/CustomFormProvider/CustomInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const AddCoupons = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("From data", data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <Plus className="mr-2" /> Add Coupons
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] max-h-[600px] md:max-h-[800px] overflow-x-hidden overflow-y-auto">
        <DialogHeader className="text-center mb-6 py-5 border-b border-solid border-slate-300">
          <DialogTitle className="text-xl font-bold text-center">
            Add Coupons
          </DialogTitle>
        </DialogHeader>
        <div>
          <CustomFromProvider onSubmit={onSubmit}>
            <CustomInput type="text" name="name" label="Day off name" />
            <CustomInput type="text" name="name" label="Day off name" />

            <div className="flex justify-end gap-3 mt-4 col-span-full">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" variant="default">
                Add Coupons
              </Button>
            </div>
          </CustomFromProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCoupons;

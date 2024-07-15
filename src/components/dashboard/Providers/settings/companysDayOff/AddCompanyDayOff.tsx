import CustomDateRangePicker from "@/components/shared/CustomFormProvider/CustomDateRangePicker";
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
import moment from "moment";
import { FieldValues, SubmitHandler } from "react-hook-form";

const AddCompanyDayOff = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log("From data", data);
    const [startDate, endDate] = data.date;
    const formattedStartDate = moment(startDate).format("YYYY-MM-DD");
    const formattedEndDate = moment(endDate).format("YYYY-MM-DD");
    console.log("Start Date:", formattedStartDate);
    console.log("End Date:", formattedEndDate);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <Plus className="mr-2" /> Add Company day off
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] max-h-[600px] md:max-h-[800px] overflow-x-hidden overflow-y-auto">
        <DialogHeader className="text-center mb-6 py-5 border-b border-solid border-slate-300">
          <DialogTitle className="text-xl font-bold text-center">
            Add Company day off
          </DialogTitle>
        </DialogHeader>
        <div>
          <CustomFromProvider onSubmit={onSubmit}>
            <CustomInput type="text" name="name" label="Day off name" />
            <CustomDateRangePicker label="Date" name="date" />
            <div className="flex justify-end gap-3 mt-4 col-span-full">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" variant="default">
                Add Company day off
              </Button>
            </div>
          </CustomFromProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddCompanyDayOff;

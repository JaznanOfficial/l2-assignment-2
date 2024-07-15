import CustomDatePicker from "@/components/shared/CustomFormProvider/CustomDatePicker";
import CustomFromProvider from "@/components/shared/CustomFormProvider/CustomFormProvider";
import CustomInput from "@/components/shared/CustomFormProvider/CustomInput";
import CustomSelect from "@/components/shared/CustomFormProvider/CustomSelect";
import CustomTimePicker from "@/components/shared/CustomFormProvider/CustomTimePicker";
import { options } from "@/utils/data";
import { FieldValues, SubmitHandler } from "react-hook-form";

const ProvidersDashboardPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Total Revenue */}
        <div className="bg-white p-6 rounded-lg">
          <div>
            <h3 className="text-xl font-semibold text-black/45">
              Total Revenue
            </h3>
            <h2 className="my-11 font-semibold text-3xl">P426,560</h2>
            <div className="flex gap-5 border-b border-solid border-slate-400 pb-5 mb-5 justify-between">
              <div className="flex justify-between gap-5">
                <p>Year-year</p>
                <span>12%</span>
              </div>
              <div className="flex justify-between gap-5">
                <p>Year-year</p>
                <span>12%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p>Daily offered services</p>
              <p>¥ 12,423</p>
            </div>
          </div>
        </div>
        {/* Total Revenue */}
        <div className="bg-white p-6 rounded-lg">
          <div>
            <h3 className="text-xl font-semibold text-black/45">
              Total Revenue
            </h3>
            <h2 className="my-11 font-semibold text-3xl">P426,560</h2>
            <div className="flex gap-5 border-b border-solid border-slate-400 pb-5 mb-5 justify-between">
              <div className="flex justify-between gap-5">
                <p>Year-year</p>
                <span>12%</span>
              </div>
              <div className="flex justify-between gap-5">
                <p>Year-year</p>
                <span>12%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p>Daily offered services</p>
              <p>¥ 12,423</p>
            </div>
          </div>
        </div>
        {/* Total Revenue */}
        <div className="bg-white p-6 rounded-lg">
          <div>
            <h3 className="text-xl font-semibold text-black/45">
              Total Revenue
            </h3>
            <h2 className="my-11 font-semibold text-3xl">P426,560</h2>
            <div className="flex gap-5 border-b border-solid border-slate-400 pb-5 mb-5 justify-between">
              <div className="flex justify-between gap-5">
                <p>Year-year</p>
                <span>12%</span>
              </div>
              <div className="flex justify-between gap-5">
                <p>Year-year</p>
                <span>12%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p>Daily offered services</p>
              <p>¥ 12,423</p>
            </div>
          </div>
        </div>
        {/* Total Revenue */}
        <div className="bg-white p-6 rounded-lg">
          <div>
            <h3 className="text-xl font-semibold text-black/45">
              Total Revenue
            </h3>
            <h2 className="my-11 font-semibold text-3xl">P426,560</h2>
            <div className="flex gap-5 border-b border-solid border-slate-400 pb-5 mb-5 justify-between">
              <div className="flex justify-between gap-5">
                <p>Year-year</p>
                <span>12%</span>
              </div>
              <div className="flex justify-between gap-5">
                <p>Year-year</p>
                <span>12%</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p>Daily offered services</p>
              <p>¥ 12,423</p>
            </div>
          </div>
        </div>
      </div>

      <CustomFromProvider onSubmit={onSubmit}>
        <CustomInput
          type="number"
          name="numberOfVehicles"
          label="Number of vehicles"
        />
        <CustomSelect name="fruit" label="Fruit" options={options} />
        {/* <CustomDatePicker name="date" label="Date" /> */}
        <CustomTimePicker name="time" label="Time" />
        <button type="submit">Submit</button>
      </CustomFromProvider>
    </section>
  );
};

export default ProvidersDashboardPage;

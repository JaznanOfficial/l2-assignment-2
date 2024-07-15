import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
const Management = () => {
  return (
    <section>
      <div className="flex flex-col custom_md:flex-row  justify-between gap-24  custom_container">
        <div>
          {" "}
          <h2 className="basis-2/5 text-3xl custom_1xl:text-[50px] custom_1xl:leading-tight max-w-[617px] 2xl:max-w-[800px]  font-inter font-bold text-[#1a202c]">
            Robust Customer Relationship Management
          </h2>
          <div className="mt-5">
            <div className="flex  gap-5 mb-4">
              <div className="w-10 h-10">
                <FaCheck className="bg-primary w-10 h-10 p-3 rounded-full text-white" />
              </div>
              <p className="text-lg font-medium text-secondary">
                Robust Customer Relationship Management (CRM)
              </p>
            </div>
            <div className="flex  gap-5 mb-4">
              <div className="w-10 h-10">
                <FaCheck className="bg-primary w-10 h-10 p-3 rounded-full text-white" />
              </div>
              <p className="text-lg font-medium text-secondary">
                Service History Tracking
              </p>
            </div>
            <div className="flex  gap-5 mb-4">
              <div className="w-10 h-10">
                <FaCheck className="bg-primary w-10 h-10 p-3 rounded-full text-white" />
              </div>
              <p className="text-lg font-medium text-secondary">
                Customer Feedback Collection
              </p>
            </div>
            <div className="flex  gap-5 mb-4">
              <div className="w-10 h-10">
                <FaCheck className="bg-primary w-10 h-10 p-3 rounded-full text-white" />
              </div>
              <p className="text-lg font-medium text-secondary">
                Invoicing and Payments
              </p>
            </div>
            <div className="flex  gap-5 mb-4">
              <div className="w-10 h-10">
                <FaCheck className="bg-primary w-10 h-10 p-3 rounded-full text-white" />
              </div>
              <p className="text-lg font-medium text-secondary">
                Waste Oil Fee and Additional Quarts Pricing
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            alt="image"
            width={643}
            height={543}
            src={"/images/features/managment.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default Management;

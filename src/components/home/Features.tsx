import { Button } from "../ui/button";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <section className="bg-white py-[112px] relative overflow-hidden">
      {/* rounded */}
      <div className="absolute -top-20 -left-28 w-[207px] h-[207px]  bg-[#589AEC] rounded-full"></div>
      {/* content */}
      <div className="custom_container ">
        {/* top content */}
        <div className="flex custom_md:flex-row flex-col gap-y-6 justify-between items-center mb-8">
          <h2 className="basis-2/5 text-3xl custom_1xl:text-[50px] custom_1xl:leading-tight max-w-[617px]  font-inter font-bold text-[#1a202c]">
            <span className="text-[#007bff]">Industry-specific features </span>
            for optimal performance
          </h2>
          <div className="basis-3/5">
            <p className="text-base 2xl:text-xl text-text_color mb-7 ">
              Book Your Oil Change is the ultimate all-in-one platform designed
              exclusively for mobile oil change providers. Our comprehensive
              suite of tools helps you manage every aspect of your business
              seamlessly, so you can focus on what you do best – providing
              top-notch service to your customers.
            </p>
            <Button
              size="primarySize"
              className="rounded-full"
              variant="default"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* bottom content */}
        <div className="relative grid grid-cols-1 custom_md:grid-cols-2 custom_1xl:grid-cols-3 gap-10 z-30">
          {/* circles */}
          <div className="w-[166px] h-[166px] md:w-[180px] md:h-[180px] 2xl:w-[266px] 2xl:h-[266px] bg-[#589AEC] rounded-full z-10 absolute -right-20 -bottom-44 custom_md:bottom-0 custom_md:-top-24  custom_md:-right-20 2xl:right-16"></div>

          <div className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] 2xl:w-[187px] 2xl:h-[187px] bg-[#6398BF] rounded-full z-10 absolute top-72 2xl:top-64 left-72  2xl:left-72  "></div>

          {/*  */}

          <FeaturesCard
            tittle={"Field Technician Support"}
            src={"/images/features/f-1.png"}
            subTitle={
              "Equip your team with tools to provide exceptional service on the go, including access to service histories, job statuses, and customer communication."
            }
          />
          <FeaturesCard
            tittle={"Integrated Oil Capacity Data"}
            src={"/images/features/f-2.png"}
            subTitle={
              "Access accurate and exclusive oil capacity data for any vehicle as part of the appointment scheduling process, ensuring technicians are always prepared."
            }
          />
          <FeaturesCard
            tittle={"Daily Analytics"}
            src={"/images/features/f-3.png"}
            subTitle={
              "Access insightful financial reports to analyze revenue, expenses, and profitability, helping you make informed business decisions."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

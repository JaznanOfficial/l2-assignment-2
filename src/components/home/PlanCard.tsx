// @ts-nocheck

import { FaCheck } from "react-icons/fa6";
import { Button } from "../ui/button";

const PlanCard = ({ plan }) => {
  // console.log(plan, "plan");

  return (
    <div
      className={`shadow-lg rounded-[20px] relative z-30  px-5 py-10 h-fit ${
        plan.plan === "Pro" ? "bg-primary " : "bg-white"
      }`}
    >
      <div className="text-center space-y-3">
        <h2
          className={`text-3xl font-bold ${
            plan.plan === "Pro" && "text-white"
          }`}
        >
          {plan.plan}
        </h2>
        <p
          className={`text-lg font-medium  ${
            plan.plan === "Pro" ? "text-white" : "text-text_color"
          }`}
        >
          Have a go and test your superpowers
        </p>
        <p className="relative inline-block">
          <sup
            className={`text-lg font-medium text-text_color absolute -top-0 -left-5 ${
              plan.plan === "Pro" ? "text-white" : "text-text_color"
            }`}
          >
            $
          </sup>{" "}
          <span
            className={`text-[50px] font-semibold text-secondary ${
              plan.plan === "Pro" ? "text-white" : "text-text_color"
            }`}
          >
            {plan.price}
          </span>
        </p>
        <div
          className={`text-center ${
            plan.plan === "Pro" ? "block !mb-6" : "hidden"
          } `}
        >
          <Button className={`bg-[#52AFFF] text-white mx-auto  `}>
            Save $50 a year
          </Button>
        </div>
      </div>
      <div className="px-10 py-7 bg-[#F9FAFB] rounded-xl">
        {plan.features.map((feature) => (
          <div className="flex  gap-5 mb-4">
            <div className="w-10 h-10">
              <FaCheck className="bg-primary w-10 h-10 p-3 rounded-full text-white" />
            </div>
            <p className="text-lg font-medium text-secondary">{feature}</p>
          </div>
        ))}

        <Button
          variant="default"
          size="primarySize"
          className={`bg-white w-full  ${
            plan.plan === "Pro"
              ? "bg-primary hover:bg-primary/85 text-white"
              : "text-primary hover:bg-primary/15"
          }`}
        >
          Signup for free
        </Button>
      </div>
    </div>
  );
};

export default PlanCard;

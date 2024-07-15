import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import PlanCard from "./PlanCard";
import PlansData from "@/fakeData/plan.json";
import CircularDesign from "../shared/Common/CircularDesign";
const Plans = () => {
  return (
    <section className="py-[112px] bg-white relative overflow-hidden z-30">
      <div className="absolute top-20 left-0">
        <CircularDesign />
      </div>
      <div className="custom_container">
        <div className="flex flex-col gap-y-12 justify-center items-center">
          <h2 className="basis-2/5 text-3xl custom_1xl:text-[50px] custom_1xl:leading-tight max-w-[492px] text-center mx-auto font-inter font-bold text-[#1a202c]">
            Choose a Plan That’s Right For You
          </h2>
          <p className="text-lg font-semibold">
            Choose plan that works best for you, feel free to contact us
          </p>
        </div>
        <div className="pt-12">
          <Tabs defaultValue="yearly" className=" flex flex-col">
            <TabsList className="grid place-self-center max-w-[380px] h-20 w-full grid-cols-2 bg-white shadow-md">
              <TabsTrigger
                className="text-lg py-4 font-medium text-secondary"
                value="monthly"
              >
                Bil Monthly
              </TabsTrigger>
              <TabsTrigger
                className="text-lg py-4 font-medium text-secondary"
                value="yearly"
              >
                Bil Yearly
              </TabsTrigger>
            </TabsList>
            <TabsContent value="monthly" className="w-[90%] mx-auto ">
              <div className="grid grid-cols-1 place-content-center	 custom_md:grid-cols-2 custom_1xl:grid-cols-3 gap-8 pt-12">
                {PlansData.map((plan) => (
                  <PlanCard plan={plan} key={plan.plan} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="yearly" className="w-[90%] mx-auto ">
              {" "}
              <div className="grid grid-cols-1 place-content-center	 custom_md:grid-cols-2 custom_1xl:grid-cols-3 gap-8 pt-12">
                {PlansData.map((plan) => (
                  <PlanCard plan={plan} key={plan.plan} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      {/*  */}
      <div className="absolute -bottom-20 -left-28 w-[388px] h-[388px]  bg-[#6398BF] rounded-full z-10"></div>
      <div className="absolute bottom-[6%] right-[24rem] 2xl:right-[35rem] w-[288px] h-[288px]  bg-[#3E9CF3] rounded-full z-10"></div>
      {/* rounded */}
      <div className="absolute top-0 right-0">
        <Image
          alt=""
          width={400}
          height={400}
          className="md:w-[300px] md:h-[300px]  w-[200px] h-[200px] custom_1xl:w-[400px] custom_1xl:h-[400px]"
          src={"/images/hero/image_circle.png"}
        />
      </div>
    </section>
  );
};

export default Plans;

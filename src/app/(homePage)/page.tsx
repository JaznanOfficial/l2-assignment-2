
import Collabs from "@/components/home/Collabs";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Management from "@/components/home/Management";
import Plans from "@/components/home/Plans";
import Tools from "@/components/home/Tools";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Collabs />
      <Tools />
      <Features />
      <Management />
      <Plans />{" "}
    </>
  );
};

export default HomePage;

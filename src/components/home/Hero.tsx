import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="pt-[168px]  pb-28 bg-gradient-to-br from-[#e0ebf8] to-[#d6e3f6]">
      {/* rounded */}
      <div className="absolute top-0 right-0">
        <Image
          alt="hero"
          width={400}
          height={400}
          className="md:w-[300px] md:h-[300px]  w-[200px] h-[200px] custom_1xl:w-[400px] custom_1xl:h-[400px]"
          src={"/images/hero/image_circle.png"}
        />
      </div>
      <div className="custom_container flex custom_md:flex-row flex-col justify-between gap-11">
        <div className="basis-1/2 2xl:basis-2/5">
          <h1 className="custom_1xl:text-[64px] sm:text-5xl custom_md:text-4xl  text-4xl font-extrabold text-[#011F3C] tracking-[-1.28px] 2xl:leading-tight custom_1xl:leading-[76px]">
            Streamline Your{" "}
            <span className="text-primary">Automotive Service Bookings</span>
            Today!
          </h1>
          <p className="text-[#55575B] mt-8 mb-6">
            Welcome! This is your all-in-one car service booking solution.
            Whether you're a mechanic, car wash, or detailing service, We
            simplifies the way you manage appointments. Join us today and
            transform the way you handle your car service business!
          </p>
          <div className="flex flex-wrap gap-6">
            <Button variant="default" size="primarySize">
              Get Started
            </Button>
            <Button variant="outline" size="primarySize">
              Our Pricing
            </Button>
          </div>
        </div>
        <div className="basis-1/2 relative 2xl:basis-3/5 ">
          {/* circles */}
          <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] 2xl:w-[400px] 2xl:h-[400px] bg-[#589AEC] rounded-full z-10 absolute top-2/3 -translate-y-1/2 custom_1xl:left-0 custom_md:-left-10"></div>
          <div className="w-[150px] h-[150px] md:w-[240px] md:h-[240px] 2xl:w-[300px] 2xl:h-[300px] bg-[#6398BF] rounded-full z-10 absolute 2xl:top-10 top-5 right-28 2xl:right-48 custom_md:right-12 custom_1xl:right-24"></div>
          {/* images */}
          <div className="relative z-20 md:pl-0 pl-8 custom_lg:pl-24 2xl:pl-28 flex items-center gap-5 justify-end">
            <div className="space-y-5">
              <Image
                src="/images/hero/hero1.png"
                width={237}
                height={280}
                alt="hero"
                className="rounded-2xl 2xl:w-[340px] "
              />{" "}
              <Image
                src="/images/hero/hero2.png"
                width={237}
                height={178}
                alt="hero"
                className="rounded-2xl 2xl:w-[340px]"
              />
            </div>
            <div>
              <Image
                src="/images/hero/hero3.png"
                width={237}
                height={280}
                alt="hero"
                className="rounded-2xl 2xl:w-[340px]"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

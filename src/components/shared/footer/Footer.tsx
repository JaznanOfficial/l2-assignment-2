import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { footerData } from "@/utils/data";
import { MoveRight, PlayCircleIcon } from "lucide-react";
import Image from "next/image";
import FooterNavs from "./FooterNavs";

const Footer = () => {
  return (
    //
    <footer className="bg-[#171E2A]">
      <div className="mx-5 md:mx-10  xl:mx-20 custom_1xl:mx-[130px] pt-5 md:pt-10  xl:pt-20 custom_1xl:pt-[130px] md:pb-10 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-0 md:gap-[100px]">
          {/* Footer forms */}
          <div>
            <h3 className=" text-3xl lg:text-[50px] max-w-[544px] font-semibold text-white leading-normal">
              People are Saying About DoWhith
            </h3>
            <p className="mt-5 my-10 max-w-[561px]">
              Everything you need to accept to payment and grow your money of
              manage anywhere on planet
            </p>
            <div>
              <Image
                src="/images/footer/quatition.png"
                width={45}
                height={40}
                alt="quatition"
              />
              <p className="my-10 max-w-[561px]">
                I am very helped by this E-wallet application , my days are very
                easy to use this application and its very helpful in my life ,
                even I can pay a short time 😍
              </p>
              <p className="text-primary">_ Aria Zinanrio</p>
              <div className="flex gap-5 items-center mt-10 flex-wrap">
                <Avatar className="w-[66px] h-[66px]">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="w-[66px] h-[66px]">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="w-[66px] h-[66px]">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="w-[66px] h-[66px]">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="w-[66px] h-[66px] rounded-full">
                  <PlayCircleIcon className="w-[66px] h-[66px] text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className=" px-5 md:px-10 custom_1xl:px-[86px] py-10 bg-[#222938] rounded-[20px] flex flex-col items-center ">
            <Image
              src="/images/footer/footerFromImage.png"
              width={72}
              height={86}
              alt="footerFromImage"
            />
            <h3 className="text-3xl font-medium text-white leading-normal">
              Get Started
            </h3>
            <form className="w-full">
              <div>
                <Label className="text-white text-lg" htmlFor="email">
                  Email
                </Label>
                <Input
                  placeholder="Enter your email"
                  className="mt-5 w-full"
                  id="email"
                />
              </div>
              <div className="mt-5">
                <Label className="text-white text-lg" htmlFor="message">
                  Message
                </Label>

                <Textarea
                  className="mt-5 w-full"
                  placeholder="Type your message here."
                />
              </div>
              <Button variant="default" size="full" className="mt-5 ">
                {" "}
                Request Demo
              </Button>
            </form>
          </div>
        </div>
        {/* Footer links */}
        <div className="mt-[170px] ">
          <div className="flex flex-col gap-y-8 custom_md:gap-y-0 custom_md:flex-row justify-between custom_md:gap-20 custom_1xl:gap-[140px]">
            <div className=" basis-[40%] space-y-[30px]">
              <h2 className="text-primary text-[50px] font-semibold">Biccas</h2>
              <p className="text-lg font-medium">
                Get started now try our product
              </p>
              <div className="relative">
                <Input
                  placeholder="Enter your email here"
                  className="rounded-full bg-transparent border border-slate-200 px-5 py-4 focus-visible:border-0 h-auto placeholder:text-lg placeholder:text-text_color placeholder:font-medium"
                />
                <div className="absolute bg-primary flex justify-center items-center text-white h-10 w-10 rounded-full right-2 top-1/2 transform -translate-y-1/2 ">
                  <MoveRight size={18} className="text-lg" />
                </div>
              </div>
            </div>
            <div className="basis-[60%] gap-y-16 flex flex-wrap gap-5 justify-between">
              {footerData.map((item, index) => (
                <FooterNavs item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
        {/* Footer copyright */}
        <div className="flex justify-between items-center mt-16 flex-wrap">
          <p className="text-center text-lg font-medium text-text_color">
            © 2022 Biccas Inc. Copyright and rights reserved
          </p>
          <p className="flex items-center gap-3 text-lg">
            <span>Terms and Condtions</span>
            <span>.</span>
            <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

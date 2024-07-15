"use client";

import { Breadcrumbs } from "@/components/dashboard/common/BreadCrumbs";
import Heading from "@/components/dashboard/common/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { LuSend } from "react-icons/lu";

const MessagePage = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  const [selectedMessage, setSelectedMessage] = useState(null);
  const handleOpenMessage = (item: any) => {
    console.log(item);
    setSelectedMessage(item);
  };

  return (
    <section className="h-[100vh]">
      <div className="flex">
        {/* Message sidebar */}
        <div
          className={`bg-white p-6 rounded-md basis-full md:basis-[300px] 2xl:basis-[400px] h-[90vh] overflow-y-auto ${
            selectedMessage ? "hidden md:block" : "block"
          }`}
        >
          <Breadcrumbs />
          <Heading title={"Messages"} />
          <div className="border-t border-solid py-3">
            {arr.map((item) => (
              <div
                onClick={() => handleOpenMessage(item)}
                className="py-4"
                key={item}
              >
                <div className="flex justify-between items-center">
                  <h3>John Smith Dela Cruz</h3>
                  <p>7:00 pm</p>
                </div>
                <p>Lorem ipsum dolor setar udiop daln</p>
              </div>
            ))}
          </div>
        </div>
        {/* Message view */}
        <div
          className={`flex-1 flex flex-col justify-between pb-1 ${
            selectedMessage ? "flex" : "hidden md:flex"
          }`}
        >
          {/* Message header */}
          <div className="bg-white p-6 rounded-md flex justify-between h-auto">
            <h2>John Smith Dela Cruz</h2>
            <BsThreeDots size={24} />
          </div>
          {/* Message body */}
          <div className="flex-1 overflow-y-auto bg-[#F0F0F0] px-10 py-3   w-full place-content-end">
            {/* Timeline */}
            <div className="flex justify-between items-center gap-5 my-2">
              <div className="w-full h-[2px] bg-slate-300"></div>
              <div className="text-black/45 capitalize">yesterday</div>
              <div className="w-full h-[2px] bg-slate-300"></div>
            </div>
            <div>
              <div>
                <div className="relative p-4 bg-white w-full md:w-[300px] rounded-lg flex gap-6 z-20 animate-message">
                  <div className="w-10 h-10">
                    <Image
                      alt=""
                      src="/face.png"
                      width={40}
                      height={40}
                      className="w-full"
                    />
                  </div>
                  <p className="text-black/85 flex-1">
                    Conveniently initiate viral synergy without multi functional
                    platforms.
                  </p>
                  <div></div>
                  <div className="triangle absolute -left-4 bottom-3 z-0"></div>
                </div>
              </div>
              {/* Receiver message */}
              <div className="flex justify-end mt-10 md:mt-0">
                <div className="relative p-4 bg-white w-full md:w-[300px]  rounded-lg flex gap-6 z-20 animate-message">
                  <p className="text-black/85 flex-1">
                    Conveniently initiate viral synergy without multi functional
                    platforms.
                  </p>
                  <div className="w-10 h-10">
                    <Image
                      alt=""
                      src="/face.png"
                      width={40}
                      height={40}
                      className="w-full"
                    />
                  </div>
                  <div></div>
                  <div className="triangle2 absolute -right-4 bottom-3 z-0"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Message footer */}
          <div className="relative h-12">
            <Input className="w-full h-12" placeholder="Type a message" />
            <Button className="absolute inset-y-0 right-0 flex items-center cursor-pointer bg-primary px-3 h-12 rounded-tr-0">
              <LuSend size={20} className="text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessagePage;

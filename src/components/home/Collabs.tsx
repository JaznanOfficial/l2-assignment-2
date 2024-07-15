import Image from "next/image";

const Collabs = () => {
  return (
    <section className="custom_md:pt-[168px] pt-20  pb-28 bg-gradient-to-br from-[#e0ebf8] relative overflow-hidden to-[#d6e3f6]">
      <div className="custom_container ">
        <h2 className="font-bold text-center text-3xl custom_md:text-[40px] font-inter">
          More than <span className="text-primary ">25,000</span> teams use
          Collabs
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
          <Image
            width={180}
            height={40}
            src="/images/collabs/Unsplash.png"
            alt="collabs"
            className="w-auto"
          />
          <Image
            width={180}
            height={40}
            src="/images/collabs/Notion.png"
            alt="collabs"
            className="w-auto"
          />
          <Image
            width={180}
            height={40}
            src="/images/collabs/INTERCOM.png"
            alt="collabs"
            className="w-auto"
          />
          <Image
            width={180}
            height={40}
            src="/images/collabs/Union.png"
            alt="collabs"
            className="w-auto"
          />
          <Image
            width={180}
            height={40}
            src="/images/collabs/grammarly.png"
            alt="collabs"
            className="w-auto"
          />
        </div>
      </div>
      {/* relative rounded */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 custom_md:-left-28 w-[193px] h-[193px] bg-[#6F97BB] rounded-full"></div>
      <div className="absolute -bottom-[230px] md:-bottom-[174px] -right-28 w-[300px] h-[300px]  bg-[#589AEC] rounded-full"></div>
    </section>
  );
};

export default Collabs;

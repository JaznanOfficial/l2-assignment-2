// @ts-nocheck

import Image from "next/image";

const FeaturesCard = ({ src, tittle, subTitle }) => {
  return (
    <div className="z-30 relative">
      <Image width={364} height={430} src={src} alt="feature" />
      <div className="mt-[30px]">
        <h3 className="text-3xl font-semibold  mb-4 font-inter">{tittle}</h3>
        <p className="text-text_color text-lg">{subTitle}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;

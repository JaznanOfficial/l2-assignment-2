const DetailsHeading = ({ heading }: { heading: string }) => {
  return (
    <div className="flex justify-between items-center gap-6 md:flex-row flex-col">
      <p className={`w-fit flex-1 text-secondary text-lg font-semibold`}>
        {heading}
      </p>
      <div className="w-full h-[1px] bg-slate-300 flex-[2]"></div>
    </div>
  );
};

export default DetailsHeading;

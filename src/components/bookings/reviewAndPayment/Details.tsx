const Details = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="flex items-center gap-2">
      <p>{title}:</p>
      <p className="text-secondary">{text}</p>
    </div>
  );
};

export default Details;

const ErrorMessage = ({ message }: { message: any }) => {
  return <p className="text-red-500 text-sm mt-1">{message}.</p>;
};

export default ErrorMessage;

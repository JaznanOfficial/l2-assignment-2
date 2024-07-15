"use client";
import CustomerDetails from "@/components/bookings/customerInfo/CustomerDetails";
import ReviewAndPaymentDetails from "@/components/bookings/reviewAndPayment/ReviewAndPaymentDetails";
import Image from "next/image";
import Link from "next/link";

const CheckoutPage = () => {
  return (
    <div className="custom_container">
      {/* top content */}
      <div className="flex flex-col items-center justify-center">
        <Link href="/" prefetch={false}>
          <Image
            src={"/images/header/logo.png"}
            className="w-full h-auto"
            width={150}
            height={60}
            alt={"logo"}
          />
        </Link>
        <h1 className="text-[40px] font-extrabold text-secondary font-nunito mt-5">
          <span className="text-primary">Checkout</span>
        </h1>
        <p className="text-xl text-center font-medium text-[#55575B] font-nunito mt-5 max-w-[558px] mx-auto mb-7">
          Please select your location, you can use the pin or search for your
          address
        </p>
      </div>

      <div className="">
        <div className="">
          <h3 className="text-xl font-bold border-b border-solid border-slate-300 py-3 mb-5">
            Customer Details
          </h3>
          <CustomerDetails />
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold border-b border-solid border-slate-300 py-3 mb-5">
            Review and Payment Details
          </h3>
          <ReviewAndPaymentDetails />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

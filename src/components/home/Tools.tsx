import { IoIosStar } from "react-icons/io";
import { FiActivity } from "react-icons/fi";
import { HiOutlineChartPie } from "react-icons/hi";
import { FiCommand } from "react-icons/fi";
const Tools = () => {
  return (
    <section className="bg-[#F9F8FD] py-[60px]">
      <div className="flex flex-col custom_md:flex-row  justify-between gap-24  custom_container">
        {/* left side */}
        <div className=" basis-3/5 flex flex-col ">
          <h2 className=" text-3xl custom_1xl:text-[50px] custom_1xl:leading-tight max-w-[617px]  font-inter font-bold text-[#1a202c]">
            Tailored Tools for{" "}
            <span className="text-[#007bff]">Mobile Oil Change </span>
            Technicians
          </h2>
          <p className="text-base 2xl:text-xl text-text_color mb-5 custom_1xl:mb-[73px] custom_1xl:mt-[30px] mt-5">
            SaaS become a common delivery model for many business applications,
            including office software, messaging software, payroll processing
            software, DBMS software, management software
          </p>
          <div className="flex gap-x-20 gap-y-5 flex-col md:flex-row ">
            <div className="flex  space-x-4">
              <div className="flex flex-col space-y-5">
                <div className="flex">
                  <IoIosStar size={34} className="text-[#F6C94F]" />
                  <IoIosStar size={34} className="text-[#F6C94F]" />
                  <IoIosStar size={34} className="text-[#F6C94F]" />
                  <IoIosStar size={34} className="text-[#F6C94F]" />
                  <IoIosStar size={34} className="text-[#F6C94F]" />
                </div>
                <span className="text-lg  text-secondary font-medium">
                  <span className="font-bold">4.9</span> / 5 rating
                </span>
                <span className="text-lg font-bold text-text_color">
                  databricks
                </span>
              </div>
            </div>
            <div className="flex  space-x-4">
              <div className="flex flex-col space-y-5">
                <div className="flex">
                  <IoIosStar size={34} className="text-[#F6C94F]" />
                  <IoIosStar size={34} className="text-[#F6C94F]" />
                  <IoIosStar size={34} className="text-[#F6C94F]" />
                  <IoIosStar size={34} className="text-[#F6C94F]" />
                  <IoIosStar size={34} className="text-[#F6C94F]" />
                </div>
                <span className="text-lg  text-secondary font-medium">
                  <span className="font-bold">4.9</span> / 5 rating
                </span>
                <span className="text-lg font-bold text-text_color">
                  databricks
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col gap-8 basis-2/5">
          <div className="flex flex-col md:flex-row custom_md:flex-col custom_lg:flex-col custom_1xl:flex-row items-start gap-5">
            <div className="basis-[60px] ">
              <FiActivity className="mt-1 h-20 w-20 p-4 bg-white rounded-md shadow-md text-primary" />
            </div>
            <div className="flex-1 space-y-3">
              <h2 className="text-3xl font-bold font-inter ">
                Real-Time Availability
              </h2>
              <p className="text-lg font-medium">
                Sync schedules in real-time for you and your team, ensuring
                efficient use of time and resources.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row custom_md:flex-col custom_lg:flex-col custom_1xl:flex-row items-start gap-5">
            <div className="basis-[60px] ">
              <HiOutlineChartPie className="mt-1 h-20 w-20 p-4 bg-white rounded-md shadow-md text-primary" />
            </div>

            <div className="flex-1 space-y-3">
              <h2 className="text-3xl font-bold font-inter ">
                Automated Reminders
              </h2>
              <p className="text-lg font-medium">
                Reduce no-shows with automated SMS and email reminders for
                upcoming appointments.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row custom_md:flex-col custom_lg:flex-col custom_1xl:flex-row items-start gap-5">
            <div className="basis-[60px] ">
              <FiCommand className="mt-1 h-20 w-20 p-4 bg-white rounded-md shadow-md text-primary" />
            </div>

            <div className="flex-1 space-y-3">
              <h2 className="text-3xl font-bold font-inter ">
                Online Customer Portal
              </h2>
              <p className="text-lg font-medium ">
                Provide customers with access to their service history, upcoming
                appointments, and maintenance schedules through an online
                portal.
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Tools;

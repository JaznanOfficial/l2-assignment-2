import Heading from "@/components/dashboard/common/Heading";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const SettingGeneralPage = () => {
  return (
    <section className="bg-white h-full  p-6 rounded-md overflow-y-auto md:max-h-[680px]">
      <Heading title="General" />
      {/* Appointment settings */}
      <div className="border-y border-solid border-slate-200 py-5">
        <h3 className="text-base font-medium my-4">Appointment settings</h3>
        <div className="space-y-2">
          <Label>Services</Label>
          <Select>
            <SelectTrigger className=" w-full  lg:w-1/2">
              <SelectValue placeholder="All services" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>services</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-[#0D172B]">
            The duration you define here will be the default time slot step in
            the application
          </p>
        </div>
        <div className="space-y-4">
          <div className="md:flex items-center space-x-2">
            <Switch id="service-duration" />
            <div>
              <Label htmlFor="service-duration">
                Use service duration as booking time slot
              </Label>
              <p className="text-[#0D172B]">
                If enabled, the time slot step will be the same as the duration
                of the service on the booking calendar.
              </p>
            </div>
          </div>
          <div className="md:flex items-center space-x-2 ml-6">
            <Switch id="buffer-time" />
            <div>
              <Label htmlFor="buffer-time">
                Add buffer time to the duration of the service when showing time
                slots
              </Label>
              <p className="text-[#0D172B]">
                If enabled, the buffer time will be included in the service
                duration on the booking calendar.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-2 my-5">
          <Label>Default appointment status</Label>
          <Select>
            <SelectTrigger className="w-full  lg:w-1/2">
              <SelectValue placeholder="Pending" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>appointment status</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="text-[#0D172B]">
            All appointments will be scheduled with the status you choose here.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Minimum time required before booking</Label>
            <Select>
              <SelectTrigger className="w-full lg:w-1/2">
                <SelectValue placeholder="Disabled" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>appointment status</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="text-[#0D172B]">
              Set the time before the appointment when customers will not be
              able to book.
            </p>
          </div>
          <div className="space-y-2">
            <Label>Minimum time required before cancelling</Label>
            <Select>
              <SelectTrigger className="w-full lg:w-1/2">
                <SelectValue placeholder="Disabled" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>appointment status</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="text-[#0D172B]">
              Set the time before the appointment when customers will not be
              able to cancel booking.
            </p>
          </div>

          <div className="space-y-2">
            <Label>Minimum time required before rescheduling</Label>
            <Select>
              <SelectTrigger className="w-full lg:w-1/2">
                <SelectValue placeholder="Disabled" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>appointment status</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="text-[#0D172B]">
              Set the time before the appointment when customers will not be
              able to reschedule booking.
            </p>
          </div>
          <div className="space-y-2">
            <Label>The number of days available for booking in advance</Label>
            <Select>
              <SelectTrigger className="w-full lg:w-1/2">
                <SelectValue placeholder="Disabled" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>appointment status</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p className="text-[#0D172B]">
              Set the number of days customers can book an appointment in
              advance.
            </p>
          </div>
        </div>
      </div>
      {/* Global settings */}
      <h3 className="text-base font-medium my-4">Appointment settings</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Date format</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="DD/MM/YYYY" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>appointment status</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Time format</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="h:mm a" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>appointment status</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Time zone</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Belgrade" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>appointment status</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>First day of the week</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Monday" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>appointment status</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Default phone country code</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="United Stated" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>appointment status</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Default first page</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Dashboard" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Default first page</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Dashboard language</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Default first page</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default SettingGeneralPage;

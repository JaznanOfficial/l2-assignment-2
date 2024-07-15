"use client";

import AddCategory from "@/components/dashboard/Providers/services/AddCategory";
import AddNewService from "@/components/dashboard/Providers/services/AddNewService";
import AddonsLists from "@/components/dashboard/Providers/services/AddonsLists";
import AllServicesLists from "@/components/dashboard/Providers/services/AllServicesLists";
import CategoryLists from "@/components/dashboard/Providers/services/CategoryLists";
import { Breadcrumbs } from "@/components/dashboard/common/BreadCrumbs";
import Heading from "@/components/dashboard/common/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ServicesPage = () => {
  return (
    <section className="bg-white h-full  p-6 rounded-md">
      <Breadcrumbs />
      <Heading title="Services" />

      {/* Tabs here */}
      <Tabs defaultValue="services" className="">
        <TabsList className="grid max-w-[300px] h-auto grid-cols-1 md:grid-cols-3 mb-3">
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="addons">Add-ons</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>
        <TabsContent value="services">
          {/* search */}
          <div className="flex md:flex-row gap-5 flex-col md:justify-between md:items-center  border-t border-solid border-slate-200 py-5">
            <div className="relative">
              <Input
                placeholder="Search"
                className="w-full md:w-[400px] mx-auto "
              />
              <div className="absolute inset-y-0 right-0  flex items-center pointer-events-none">
                <Button variant="default">Search</Button>
              </div>
            </div>
            <AddNewService />
          </div>
          {/* table */}
          <AllServicesLists />

          {/* add new service Modal */}
        </TabsContent>
        <TabsContent value="addons">
          {/* search */}
          <div className="flex md:flex-row gap-5 flex-col md:justify-between md:items-center  border-t border-solid border-slate-200 py-5">
            <div className="relative">
              <Input
                placeholder="Search"
                className="w-full md:w-[400px] mx-auto "
              />
              <div className="absolute inset-y-0 right-0  flex items-center pointer-events-none">
                <Button variant="default">Search</Button>
              </div>
            </div>
          </div>
          <AddonsLists />
        </TabsContent>
        <TabsContent value="categories">
          {/* search */}
          <div className="flex md:flex-row gap-5 flex-col md:justify-between md:items-center  border-t border-solid border-slate-200 py-5">
            <div className="relative">
              <Input
                placeholder="Search"
                className="w-full md:w-[400px] mx-auto "
              />
              <div className="absolute inset-y-0 right-0  flex items-center pointer-events-none">
                <Button variant="default">Search</Button>
              </div>
            </div>
            <AddCategory />
          </div>
          <CategoryLists />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default ServicesPage;

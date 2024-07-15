import { Breadcrumbs } from "@/components/dashboard/common/BreadCrumbs";
import Heading from "@/components/dashboard/common/Heading";
import AllSubscriptionsList from "@/components/dashboard/Providers/subscriptions/AllSubscriptionsList";
const SubscriptionsPage = () => {
  return (
    <section className="bg-white h-full  p-6 rounded-md">
      <Breadcrumbs />
      <Heading title="My subscriptions" />
      <AllSubscriptionsList />
    </section>
  );
};

export default SubscriptionsPage;

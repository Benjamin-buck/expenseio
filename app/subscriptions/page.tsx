import PageTitle from "@/components/PageTitle";
import React from "react";
import SubscriptionsTable from "./SubscriptionsTable";

const SubscriptionsPage = () => {
  return (
    <div>
      <PageTitle
        title="Subscriptions"
        description="Manage all your descriptions in one place."
      />
      <SubscriptionsTable />
    </div>
  );
};

export default SubscriptionsPage;

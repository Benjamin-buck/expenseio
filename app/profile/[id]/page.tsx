import React from "react";
import AccountPane from "./AccountPane";
import Timeline from "./Timeline";
import PageTitle from "@/components/PageTitle";

const UserProfile = () => {
  return (
    <div>
      <PageTitle
        title="My Profile"
        description="Modify your profile settings"
      />
      <div className="grid grid-cols-8">
        <div className="col-span-2">
          <AccountPane />
        </div>

        <div className="col-span-6 border border-red-500">
          <Timeline />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

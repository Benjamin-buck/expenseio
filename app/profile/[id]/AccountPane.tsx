import { Avatar, Button } from "@radix-ui/themes";
import React from "react";

const AccountPane = () => {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <Avatar
            size="9"
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
          <h2 className="text-xl font-semibold text-center">Olivia Rodrigo</h2>
        </div>
      </div>

      <div className="mt-5 flex justify-around">
        <Button size="2" color="pink" variant="outline">
          Edit Profile
        </Button>
        <Button size="2" color="pink" variant="outline">
          Edit Profile
        </Button>
      </div>
    </>
  );
};

export default AccountPane;

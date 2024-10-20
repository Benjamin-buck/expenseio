import { Avatar, DropdownMenu, Text } from "@radix-ui/themes";
import React from "react";

const NavUserProfile = () => {
  return (
    <div className="flex items-center gap-3">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Text className="flex items-center gap-2">
            Olivia Rodrigo
            <DropdownMenu.TriggerIcon />
            <Avatar
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              fallback="A"
            />
          </Text>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>My Profile</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item color="red">Account Settings</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default NavUserProfile;

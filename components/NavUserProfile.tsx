import { Avatar, Button, DropdownMenu, Text } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavUserProfile = () => {
  const { status, data: session } = useSession();
  return (
    <div className="flex items-center gap-3">
      {status === "authenticated" ? (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Text className="flex items-center gap-2 font-semibold body-text">
              {session.user!.name!}
              <DropdownMenu.TriggerIcon />
              <Avatar src={session.user!.image!} fallback="A" />
            </Text>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>
              <Link href="/profile/1">My Profile</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item>My Budgets</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item color="red">Account Settings</DropdownMenu.Item>
            <DropdownMenu.Item color="red">
              <Link href="/api/auth/signout">Log out</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      ) : (
        <Button color="pink" variant="soft">
          <Link href="/api/auth/signin">Sign in</Link>
        </Button>
      )}
    </div>
  );
};

export default NavUserProfile;

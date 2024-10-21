import { Callout } from "@radix-ui/themes";
import React from "react";

const Alert = () => {
  return (
    <div>
      <Callout.Root>
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text>
          You will need admin privileges to install and access this application.
        </Callout.Text>
      </Callout.Root>
    </div>
  );
};

export default Alert;

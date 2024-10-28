import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

interface Props {
  title: string;
}

const PageHeading = ({ title }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="page_title">{title}</h1>
      <div className="flex gap-3 items-center">
        <Button label="Account Settings" />
        <Link href="/">
          <Image
            src="/profile.jpg"
            width={55}
            height={55}
            className="rounded-md"
            alt="profile photo"
          />
        </Link>
      </div>
    </div>
  );
};

export default PageHeading;

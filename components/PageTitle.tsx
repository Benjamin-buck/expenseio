import React from "react";

interface Props {
  title: string;
  description: string;
}

const PageTitle = ({ title, description }: Props) => {
  return (
    <div className="mt-5">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="body-text">{description}</p>
    </div>
  );
};

export default PageTitle;

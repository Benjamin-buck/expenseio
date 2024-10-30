import React from "react";

interface Props {
  title: string;
  description: string;
}
const CardTitle = ({ title, description }: Props) => {
  return (
    <div>
      <h2 className="card_heading">{title}</h2>
      <p className="card_desc">{description}</p>
    </div>
  );
};

export default CardTitle;

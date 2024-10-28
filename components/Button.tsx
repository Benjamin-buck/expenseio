"use client";
import Image from "next/image";
import React from "react";

interface Props {
  label: string;
  onClick?: () => void;
  variant?: string;
  disabled?: boolean;
  icon?: string;
}
const Button = ({ label, variant, disabled, icon }: Props) => {
  return (
    <button
      disabled={disabled}
      className={`
       ${variant === "black" && "button_primary"}
       ${disabled && "button_disabled"}
        flex gap-2 items-center px-4 bg-black text-white py-3 rounded-xl my-2
        `}
    >
      {label}
      {icon && <Image src={icon!} width={20} height={20} alt="button icon" />}
    </button>
  );
};

export default Button;

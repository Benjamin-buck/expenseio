import { Box, Container } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { PiPiggyBankBold } from "react-icons/pi";

const links = [
  { id: 1, label: "Overview", href: "/overview" },
  { id: 1, label: "Expenses", href: "/expenses" },
];

const NavBar = () => {
  return (
    <Box width="full" className="border" py="2">
      <Container>
        <div className="flex items-center gap-3">
          <div className="items-center flex gap-3">
            <PiPiggyBankBold className="text-6xl text-pink-400" />
            <h1 className="text-pink-400 text-2xl font-semibold">Piggy Bank</h1>
          </div>
          <ul className="flex gap-3">
            {links.map(({ id, label, href }) => (
              <li key={id}>
                <Link href={href} className="font-semibold text-gray-400">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Box>
  );
};

export default NavBar;

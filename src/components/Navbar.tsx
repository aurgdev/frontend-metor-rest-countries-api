import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

type Props = {};

const Navbar = (props: Props) => {
  const [show, setShow] = useState(false);
  return (
    <nav className="h-20 shadow text-very-dark-blue-dm bg-white-dm dark:bg-dark-blue-dm  dark:text-white-dm">
      <div className="container mx-auto h-full flex items-center justify-between px-6 md:px-0">
        <h1 className="font-extrabold">Where in the world?</h1>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

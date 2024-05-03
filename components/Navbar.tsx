import React from "react";
import Image from "next/image";
import Logo from "../public/Logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navBar flex justify-center pt-12 pb-4 ">
        <Link href={""}>
          <Image unoptimized src={Logo} alt="Logo" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;

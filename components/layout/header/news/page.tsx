'use client'

import Link from "next/link";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

import { Tooltip } from "@chakra-ui/react";
export default function page() {
  return (
    <div className=" flex items-center justify-end ">
      <Tooltip hasArrow label="Phone" bg="red.500" closeDelay={200}>
        <Link href="" className=" sm:px-4 px-2 flex items-center ">
          <span className="md:text-red-500 text-white">
            <FaPhoneAlt />
          </span>
          <span className="md:block hidden pl-1">+92 314 4878266</span>
        </Link>
      </Tooltip>
      <Tooltip hasArrow label="Message" bg="red.500" closeDelay={200}>
        <Link href="" className=" sm:px-4 px-2 flex items-center pr-2">
          <span className="md:text-red-500 text-white">
            <FaRegEnvelope />
          </span>
          <span className="md:block hidden pl-2">muzammiloff@gmail.com</span>
        </Link>
      </Tooltip>
    </div>
  );
}

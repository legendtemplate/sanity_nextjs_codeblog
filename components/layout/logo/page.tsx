import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <>
      <div className="container mx-auto flex flex-wrap items-center justify-between pt-2 px-4">
        <div className="logo flex items-center md:justify-start">
          <Image
            src="/vercel.svg"
            height="40"
            width="40"
            alt="logo"
            title="logo"
            className="h-20 w-24"
          />
        </div>
        <div className="banner">
          {/* <img
            src="https://preview.colorlib.com/theme/magazine/img/banner-ad.jpg"
            alt=""
            className="h-20 w-full"
          /> */}
        </div>
      </div>
    </>
  );
}

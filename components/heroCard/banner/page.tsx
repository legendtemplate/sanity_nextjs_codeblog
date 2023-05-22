import React from "react";
import Image from "next/image";

export default function index() {
  return (
    <>
      <span className="py-5 mt-5 bg-white px-6 font-bold text-lg block w-full text-white">
        <Image src="https://preview.colorlib.com/theme/magazine/img/banner-ad.jpg"
        alt="Hello"
        title="Hello"
        height='200'
        width='200'
        />
      </span>
    </>
  );
}

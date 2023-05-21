import React from "react";

export default function index() {
  return (
    <>
      {" "}
      <div className="bg-white">
        <span className="py-2 px-3 font-normal mb-3 text-lg bg-red-500 block w-full text-white">
          Categories:
        </span>
        <div className=" p-4 mb-5 ">
          <ul className="category flex flex-col ">
            <li>
              <a href="#" className="flex justify-between items-center border-b-2 border-dotted border-red-500 hover:text-red-500 hover:border-white transition-all">
                <span className="text-lg py-2 font-semibold">Blog</span>
                <span className="text-lg py-2 font-semibold">2</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between items-center border-b-2 border-dotted border-red-500 hover:text-red-500 hover:border-white transition-all">
                <span className="text-lg py-2 font-semibold">Blog</span>
                <span className="text-lg py-2 font-semibold">2</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between items-center border-b-2 border-dotted border-red-500 hover:text-red-500 hover:border-white transition-all">
                <span className="text-lg py-2 font-semibold">Blog</span>
                <span className="text-lg py-2 font-semibold">2</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between items-center border-b-2 border-dotted border-red-500 hover:text-red-500 hover:border-white transition-all">
                <span className="text-lg py-2 font-semibold">Blog</span>
                <span className="text-lg py-2 font-semibold">2</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex justify-between items-center border-b-2 border-dotted border-red-500 hover:text-red-500 hover:border-white transition-all">
                <span className="text-lg py-2 font-semibold">Blog</span>
                <span className="text-lg py-2 font-semibold">2</span>
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </>
  );
}

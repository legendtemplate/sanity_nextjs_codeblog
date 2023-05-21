import React from "react";
import { FaComment, FaCalendarAlt, FaUserGraduate } from "react-icons/fa";

export default function index() {
  return (
    <>
      <span className="py-3 mt-5 px-6 font-bold text-lg bg-red-500 block w-full text-white">
        Coding
      </span>
      <div className="grid lg:grid-cols-2 grid-cols-1 bg-gray-50">
      <div className=" lg:p-5 p-3">
        <div className="img">
        <img
          className="w-full"
          src="https://preview.colorlib.com/theme/magazine/img/top-post1.jpg"
          alt="" />
        </div>
        <div className="content bg-teal-50 p-6">
        <a href="image-post.html">
          <h3 className="text-black lg:text-2xl md:text-xl text-lg font-bold lg:pt-4 pt-3">
            A Discount Toner Cartridge Is Better Than Ever.
          </h3>
        </a>
        <ul className="meta flex text-black py-4">
          <li>
            <a href="#" className="flex items-center">
              <span className="pr-1 text-red-500">
                <FaUserGraduate />
              </span>
              Mark wiens
            </a>
          </li>
          <li className="pl-5">
            <a href="#" className="flex items-center">
              <span className="pr-1 text-red-500">
                <FaCalendarAlt />
              </span>
              03 April, 2018
            </a>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem odit eaque iusto est asperiores. Nostrum vitae
          accusantium sint ad rem?
        </p>
        <div className="meta flex justify-between text-black py-4">
          <span>
            <a href="#" className="flex items-center">
              <span className="pr-1 text-red-500">
                <FaUserGraduate />
              </span>
              Read More
            </a>
          </span>
          <span className="pl-5">
            <a href="#" className="flex items-center">
              <span className="pr-1 text-red-500">
                <FaCalendarAlt />
              </span>
              Folder
            </a>
          </span>
        </div>
        </div>
      </div>
      <div className="lg:p-5 p-3">
        <div className="img">
        <img
          className="w-full"
          src="https://preview.colorlib.com/theme/magazine/img/top-post1.jpg"
          alt="" />
        </div>
        <div className="content bg-teal-50 p-6">
        <a href="image-post.html">
        <h3 className="text-black lg:text-2xl md:text-xl text-lg font-bold lg:pt-4 pt-3">
            A Discount Toner Cartridge Is Better Than Ever.
          </h3>
        </a>
        <ul className="meta flex text-black py-4">
          <li>
            <a href="#" className="flex items-center">
              <span className="pr-1 text-red-500">
                <FaUserGraduate />
              </span>
              Mark wiens
            </a>
          </li>
          <li className="pl-5">
            <a href="#" className="flex items-center">
              <span className="pr-1 text-red-500">
                <FaCalendarAlt />
              </span>
              03 April, 2018
            </a>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem odit eaque iusto est asperiores. Nostrum vitae
          accusantium sint ad rem?
        </p>
        <div className="meta flex justify-between text-black py-4">
          <span>
            <a href="#" className="flex items-center">
              <span className="pr-1 text-red-500">
                <FaUserGraduate />
              </span>
              Read More
            </a>
          </span>
          <span className="pl-5">
            <a href="#" className="flex items-center">
              <span className="pr-1 text-red-500">
                <FaCalendarAlt />
              </span>
              Folder
            </a>
          </span>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}

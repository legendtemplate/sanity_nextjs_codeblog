import React from "react";
import { FaComment, FaCalendarAlt, FaUserGraduate } from "react-icons/fa";
export default function index() {
  return (
    <><span className='py-3 px-6 font-bold text-lg bg-red-500 block w-full text-white'>Today News</span>
    <div className="bg-gray-50 p-5 ">

      <div className="img">
        <img
          className="w-full"
          src="https://preview.colorlib.com/theme/magazine/img/top-post1.jpg"
          alt="" />
      </div>
      <div className="content">
        <a href="image-post.html">
          <h3 className="text-black lg:text-2xl md:text-xl text-lg font-bold pt-4">
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
          <li className="pl-5">
            <a href="#" className="flex items-center">
              <span className="pr-1 text-red-500">
                <FaComment />
              </span>
              06 Comments
            </a>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem odit eaque iusto est asperiores. Nostrum vitae
          accusantium sint ad rem?
        </p>
      </div>
    </div>
    </>
  );
}

import React from "react";
import Image from "next/image";
import {FaCalendarAlt, FaUserGraduate } from "react-icons/fa";

interface Data {
  title: string;
  // slug: string
  image: string;
  publishedAt: number;
  authorName: string;
  authorSlug: string;
  cat: string;
  catSlug: string;
}

export default function page(props: Data) {
  return (
    <div>
      {/* image */}
      <div className="feature-img-thumb relative">
        <Image
          className="img-fluid"
          height="400"
          width="999"
          src={props.image}
          alt={props.title}
          title={props.title}
        />
      </div>
      <div className="content-wrap mb-6">
        <ul className="tags mt-2">
          <li className="inline-block bg-red-500 text-white py-1 px-7 font-normal">
            <a href={props.catSlug}>{props.cat}</a>
          </li>
        </ul>
        <h2 className="my-2 lg:text-3xl md:text-2xl text-xl">{props.title}</h2>
        <ul className="meta pb-1 my-2 flex">
          <li>
            <a href={props.authorSlug} className="flex mr-2 items-center text-gray-400 text-sm">
              <span className="mr-1"><FaUserGraduate /></span>
              {props.authorName}
            </a>
          </li>
          <li className="flex items-center text-gray-400 text-sm ">
            <span className="mr-1"><FaCalendarAlt /></span>
            <span>{props.publishedAt}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

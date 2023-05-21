import React from "react";
import { FaComment, FaCalendarAlt, FaUserGraduate } from "react-icons/fa";
import Image from "next/image";
interface Data {
  title: string
  slug: string
  image: string
  publishedAt: number
  authorName: string
  authorSlug: string
  cat: string
  catSlug: string
  bio: string
}

export default function page(props: Data) {
  return (
    <>
      <div className=" lg:p-5 p-3">
      <a href={props.slug}>
      <div className="img">
        <Image
          className="w-full"
          src={props.image}
          alt={props.title}
          title={props.title}
          height='999'
          width='999'
          />
        </div>
      </a>
        
        <div className="content bg-teal-50 p-6">
        <a  href={props.title}>
          <h3 className="text-black lg:text-2xl md:text-xl text-lg font-bold lg:pt-4 pt-3">
          {props.title}
          </h3>
        </a>
        <ul className="meta flex text-black py-4">
          <li>
            <a href={props.authorSlug} className="flex items-center">
              <span className="pr-1 text-red-500">
                <FaUserGraduate />
              </span>
              {props.authorName}
            </a>
          </li>
          <li className="pl-5">
            <a href="#" className="flex items-center">
              <span className="pr-1 text-red-500">
                <FaCalendarAlt />
              </span>
              {props.publishedAt}
            </a>
          </li>
        </ul>
        <p>
          {props.bio}
        </p>
        </div>
      </div>
    </>
  );
}

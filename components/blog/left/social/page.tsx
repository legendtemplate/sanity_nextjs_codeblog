
import Link from 'next/link';
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Inner from './inner';

export default function index() {
  return (
    <>
      <div className="bg-white">
        <span className="py-2 px-3 font-normal mb-3 text-lg bg-red-500 block w-full text-white">
          Social Links: 
        </span>
        <div className=" p-4 mb-5 ">
       <Inner />
        </div>
      </div>
    </>
  );
}

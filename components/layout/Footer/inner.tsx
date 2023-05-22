import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function inner() {
  return (
    <>
      <div className=" flex items-center justify-center ">
        <Link
          href=""
          className="social mr-5 border-2 border-blue-500 hover:border-solid hover:bg-blue-500 hover:text-white border-dotted p-4 rounded-full"
        >
          <FaFacebookF />
        </Link>
        <Link
          href=""
          className="social mr-5 border-2 border-red-500 hover:border-solid hover:bg-red-500 hover:text-white border-dotted p-4 rounded-full"
        >
          <FaYoutube />
        </Link>
        <Link
          href=""
          className="social mr-5 border-2 border-cyan-500 hover:border-solid hover:bg-cyan-500 hover:text-white border-dotted p-4 rounded-full"
        >
          <FaLinkedin />
        </Link>
        <Link
          href=""
          className="social mr-5 border-2 border-orange-500 hover:border-solid hover:bg-orange-500 hover:text-white border-dotted p-4 rounded-full"
        >
          <FaInstagram />
        </Link>
      </div>
    </>
  );
}

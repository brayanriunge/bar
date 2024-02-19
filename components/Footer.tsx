import Logo from "@/public/Logo.png";
import { FaMapMarker, FaRegCopyright } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" py-16 min-h-min ">
      <div className="md:flex justify-content w-5/6 m-5 gap-16">
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className=" md:flex items-center">
            <Image
              src={Logo}
              alt="logo"
              height={90}
              width={90}
              className="rounded-full"
            />{" "}
            {""}
            <span className=" text-4xl font-bold text-red-500">
              {" "}
              Jambo Lounge
            </span>
          </div>
          <p className="font-bold mt-4 flex gap-2 text-lg">
            <FaMapMarker /> Location: Kansas
          </p>
        </div>
        <div className="basis-1/4 md:mt-0 mt-16">
          <h4 className="font-bold text-lg">Contact Us</h4>
          <p className="flex gap-2 mt-4 items-baseline">
            <FaInstagram /> Instagram: eMental
          </p>
          <p className="flex gap-2  mt-4 items-baseline">
            <FaTwitter /> Twitter: eMental
          </p>
          <p className="flex gap-2  mt-4 items-baseline">
            <AiOutlineMail /> Email: emental@gmail.com
          </p>
          <p className="flex gap-2  mt-4 items-baseline">
            <AiFillPhone /> Phone: 0701842846
          </p>
        </div>
        <div className="basis-1/4 md:mt-0 mt-16">
          <h4 className="font-bold text-lg">Contact Developer</h4>
          <p className="flex gap-2 mt-4 items-baseline">
            <FaInstagram /> Instagram: riunge_brian
          </p>

          <p className="flex gap-2  mt-4 items-baseline">
            <AiOutlineMail /> Email: riungebrian@gmail.com
          </p>
          <p className="flex gap-2  mt-4 items-baseline">
            <AiFillPhone /> Phone: 0701842846
          </p>
          <p className="flex gap-2  mt-4 items-baseline">
            <FaRegCopyright /> All Rights Reserved By: Developer
          </p>
        </div>
      </div>
    </footer>
  );
}

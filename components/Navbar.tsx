import Image from "next/image";
import Logo from "@/public/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import { HiOutlineX } from "react-icons/hi";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const flexStyles = `flex items-center justify-between`;
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <div className={`${flexStyles} fixed z-30 w-full shadow bg-slate-100`}>
      <div className={`${flexStyles} mx-auto w-5/6`}>
        <div className={`${flexStyles} w-full gap-4 md:gap-10`}>
          <Image src={Logo} alt="logo" height={40} width={80} />
          <h1 className="text-2xl font-semibold text-gray-600 flex gap-4">
            Jambo <span> Lounge</span>
          </h1>
          {isAboveMediumScreens ? (
            <div className={`${flexStyles} w-full `}>
              <div className={`${flexStyles} md:gap-20`}>
                <Link
                  href={"/#home"}
                  className={`${
                    router.pathname === "/#home"
                      ? "text-gray-600"
                      : "text-orange-800"
                  } hover:text-orange-500`}
                >
                  Home
                </Link>
                <Link
                  href="/#menu"
                  className={`${
                    router.pathname === "/#menu"
                      ? "text-gray-600"
                      : "text-orange-800"
                  } hover:text-orange-500`}
                >
                  Menu
                </Link>
                <Link
                  href={"/#activity"}
                  className={`${
                    router.pathname === "/#activity"
                      ? "text-gray-600"
                      : "text-orange-800"
                  } hover:text-orange-500`}
                >
                  Activities
                </Link>
                <Link
                  href="/#contact"
                  className={`${
                    router.pathname === "/#contact"
                      ? "text-gray-600"
                      : "text-orange-800"
                  } hover:text-orange-500`}
                >
                  Contact Us
                </Link>
                <Link
                  href={"/"}
                  className={`${
                    router.pathname === "/#location"
                      ? "text-gray-600"
                      : "text-orange-800"
                  } hover:text-orange-500`}
                >
                  Location
                </Link>
              </div>
            </div>
          ) : (
            <button
              className="rounded-md "
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <HiBars3 className="h-6 w-6" />
            </button>
          )}
          {!isAboveMediumScreens && isMenuToggled && (
            <div className="right-0 bottom-0 h-full fixed p-5 z-40 w-[300px]  bg-slate-100">
              <div className="p-4 flex justify-end">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <HiOutlineX className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-col gap-10 justify-center items-center text-2xl  font-bold">
                <Link
                  href={"/#home"}
                  className={`${
                    router.pathname === "/#home"
                      ? "text-gray-600"
                      : "text-orange-800"
                  } hover:text-orange-500`}
                >
                  Home
                </Link>
                <Link
                  className={`${
                    router.pathname === "/#menu"
                      ? "text-gray-600"
                      : "text-orange-800"
                  } hover:text-orange-500`}
                  href="/#menu"
                >
                  Menu
                </Link>
                <Link
                  href={"/#activity"}
                  className={`${
                    router.pathname === "/#activity"
                      ? "text-gray-600"
                      : "text-orange-800"
                  } hover:text-orange-500`}
                >
                  Activities
                </Link>
                <Link
                  className={`${
                    router.pathname === "/#contact"
                      ? "text-gray-600"
                      : "text-orange-800"
                  } hover:text-orange-500`}
                  href="/#contact"
                >
                  Contact Us
                </Link>
                <Link
                  href={"/"}
                  className={`${
                    router.pathname === "/#location"
                      ? "text-gray-600"
                      : "text-orange-800"
                  } hover:text-orange-500`}
                >
                  Location
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

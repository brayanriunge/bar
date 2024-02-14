import Image from "next/image";
import Logo from "@/public/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuer";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";

export default function Navbar() {
  const flexStyles = `flex items-center justify-between`;
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <div className={`${flexStyles} fixed z-30 w-full shadow bg-yellow-300`}>
      <div className={`${flexStyles} mx-auto w-5/6`}>
        <div className={`${flexStyles} w-full gap-10`}>
          <Image src={Logo} alt="logo" height={40} width={80} />
          <h1 className="text-2xl font-semibold">Jambo Lounge</h1>
          {isAboveMediumScreens ? (
            <div className={`${flexStyles} w-full `}>
              <div className={`${flexStyles} gap-8`}>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Menu</Link>
                <Link href={"/"}>Activities</Link>
                <Link href={"/"}>Contact Us</Link>
                <Link href={"/"}>Location</Link>
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
        </div>
      </div>
    </div>
  );
}

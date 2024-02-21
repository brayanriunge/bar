import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Redbull from "@/public/Redbull.jpg";
import Lucozade from "@/public/Lucozade.jpg";
import Monster from "@/public/monster.jpg";
import Shark from "@/public/shark.jpg";

export default function Dashboard() {
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  return (
    <section>
      <div className="md:h-full w-full p-4">
        <div
          className="bg-cover mt-16 shadow-xl w-full bg-no-repeat rounded-xl bg-center bg-homeimage"
          style={{
            backgroundImage: "/dashboard.jpg",
            height: "500px",
          }}
        >
          <div className="p-10 m-10">
            <div className="py-5 bg-opacity-0 rounded-2xl">
              <div className="flex items-center md:mt-10 mt:p-5">
                <p className="md:text-4xl md:font-bold text-center md:text-white">
                  WE ARE READY TO GIVE YOU THE ENTERTAINMENT YOU DESERVE
                </p>
              </div>
            </div>
          </div>
        </div>
        {/**sponsors */}
        {isAboveMediumScreen && (
          <div className="h-[100px] w-full py-2">
            <div className="w-5/6 mx-auto">
              <div className="flex items-center gap-52 w-3/5">
                <Image
                  src={Redbull}
                  alt="redbull"
                  height={40}
                  width={100}
                  className="rounded-md"
                />
                <Image
                  src={Monster}
                  alt="monster"
                  height={40}
                  width={100}
                  className="rounded-md"
                />
                <Image
                  src={Lucozade}
                  alt="lucozade"
                  height={40}
                  width={100}
                  className="rounded-md"
                />
                <Image
                  src={Shark}
                  alt="shark"
                  height={40}
                  width={100}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

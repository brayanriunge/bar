import Image from "next/image";
import DJ from "@/public/dj.jpeg";

export default function Music() {
  return (
    <div className="gap-16 md:h-full pb-4">
      <div className="md:w-5/6 md:h-5/6 md:flex items-center justify-between gap-8 ">
        <div className="z-10 md:basis-3/5">
          <h1 className="text-3xl">
            NICE <span className="text-olive-green">MUSIC</span>
          </h1>
        </div>
        <div>
          <Image src={DJ} alt="djing" className="rounded-md" />
        </div>
      </div>
    </div>
  );
}

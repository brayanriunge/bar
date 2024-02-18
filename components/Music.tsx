import Image from "next/image";
import DJ from "@/public/dj.jpeg";

export default function Music() {
  return (
    <div className="gap-16 md:h-full ">
      <div className="md:w-5/6 md:h-5/6 md:flex items-center justify-between gap-8 mx-auto mt-12 ">
        <div className="z-10 md:basis-3/5 p-5 m-2 ">
          <h1 className="text-3xl font-bold text-dark-chocolate">
            NICE <span className="text-yellow-300 italic">MUSIC</span>
          </h1>
          <div className="text-md text-bold mt-2 p-5 m-2">
            Step into our bar and let the rhythm take you on a journey. Our
            vibrant atmosphere pulses with the soulful beats of live music,
            offering an unforgettable experience for music enthusiasts and
            casual patrons alike. Whether you're seeking the smooth melodies of
            jazz, the electrifying energy of rock, or the infectious rhythms of
            blues, our stage is a haven for diverse musical genres. Talented
            musicians grace our venue, delivering captivating performances that
            will stir your senses and leave you craving more. From intimate
            acoustic sets to high-energy shows that ignite the dance floor,
            there's something for everyone to enjoy. So gather your friends,
            grab a drink, and immerse yourself in the magic of live music at our
            bar. Your next unforgettable night out awaits.
          </div>
        </div>
        <div className="mt-2 m-2">
          <Image src={DJ} alt="djing" className="rounded-md" />
        </div>
      </div>
    </div>
  );
}

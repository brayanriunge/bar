import Image, { StaticImageData } from "next/image";

type props = {
  id: number;
  picture: StaticImageData;
  info: string;
  title: string;
};
export default function ActivityTypes({ id, info, picture, title }: props) {
  const overlayStyles = `p-4 absolute z-30 flex h-[300px] w-[450px] 
  flex-col items-center justify-center whitespace-normal 
     text-center text-white opacity-0 transition bg-olive-green
    duration-500 hover:opacity-90`;
  return (
    <li className="relative mx-3 inline-block h-[450px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{title}</p>
        <p className="mt-5">{info}</p>
      </div>
      <Image src={picture} alt={`${picture}`} width={450} height={300} />
    </li>
  );
}

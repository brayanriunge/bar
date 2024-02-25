import Image, { StaticImageData } from "next/image";

type props = {
  id: number;
  picture: StaticImageData;
  info: string;
  title: string;
};
export default function ActivityTypes({ id, info, picture, title }: props) {
  const overlayStyles = `p-5 absolute z-30 flex h-[400px] w-[450px] 
    md:flex-col items-center justify-center whitespace-normal 
     text-center text-white opacity-0 transition 
    duration-500 hover:opacity-90`;
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{title}</p>
        <p className="mt-5">{info}</p>
      </div>
      <Image src={picture} alt={`${picture}`} />
    </li>
  );
}

import Image, { StaticImageData } from "next/image";

type prop = {
  picture: StaticImageData;
  title: string;
  description: string;
};

export default function CardMenu({ picture, title, description }: prop) {
  return (
    <>
      <Image
        src={picture}
        alt="picture"
        height={100}
        width={100}
        className="rounded-md"
      />
      <div className="text-3xl font-bold text-gray-400">
        <h1>{title}</h1>
      </div>
      <div className="text-lg text-gray-400">
        <p>{description}</p>
      </div>
    </>
  );
}

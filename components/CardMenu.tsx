import Image, { StaticImageData } from "next/image";

type prop = {
  picture: StaticImageData;
  title: string;
  description: string;
};

export default function CardMenu({ picture, title, description }: prop) {
  return (
    <div className="mt-5 mx-auto rounded-md border-2 border-yellow-400 py-16 px-5 text-center items-center">
      <Image
        src={picture}
        alt="picture"
        height={380}
        width={400}
        className="rounded-md content-fill"
      />
      <div className="text-3xl font-bold text-gray-700">
        <h1>{title}</h1>
      </div>
      <div className="text-lg text-gray-700">
        <p>{description}</p>
      </div>
    </div>
  );
}

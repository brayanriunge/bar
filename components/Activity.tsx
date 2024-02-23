import { ActivityType } from "@/hooks/types";
import { StaticImageData } from "next/image";
import Food from "@/public/food.jpg";
import Wine from "@/public/tasting.jpg";

type props = {
  id: number;
  picture: StaticImageData;
  info: string;
  title: string;
};

const activities: Array<ActivityType> = [
  {
    id: 1,
    picture: Food,
    info: "Welcome to our tantalizing world of Mystery Menu Events at Jambo Lounge! Step into a realm of culinary intrigue and indulge your senses with an unforgettable dining and drinking experience like no other.",
    title: "Mystery Food Tasting",
  },
  {
    id: 2,
    picture: Wine,
    info: "",
    title: "Wine Tasty",
  },
];

export default function Activity() {
  return (
    <section id="activity" className="mx-auto w-5/6 ">
      <div className="basis-3/5 w-3/5 ">
        <h1 className="text-3xl text-dark-chocolate p-5 m-5 font-bold">
          Activities <span className="italic text-yellow-300">To Do</span>
        </h1>
      </div>
      <div></div>
    </section>
  );
}

import { ActivityType } from "@/hooks/types";
import Image, { StaticImageData } from "next/image";
import Food from "@/public/food.jpg";
import Wine from "@/public/tasting.jpg";
import Game from "@/public/game.jpg";
import ActivityTypes from "./ActivityTypes";

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
    info: "Embark on a journey of taste and refinement at Jambo Lounge. Elevate your senses with our exclusive wine tasting events, crafted for discerning palates and aficionados alike.",
    title: "Wine Tasty",
  },
  {
    id: 3,
    picture: Game,
    info: "Get ready to elevate your dining and drinking experience with our exciting Game Night Events, guaranteed to bring fun, laughter, and friendly competition to your evening.",
    title: "Game Night",
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
      <div>
        <p className="text-lg p-5 m-5 ">
          We are ready to services you with best activities for your relaxation.
          <span className="italics text-orange-500 font-extrabold">
            COME JOIN US
          </span>
        </p>
      </div>

      <div className="mt-10 h-[250px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[100px] whitespace-nowrap ">
          {activities.map((activity: ActivityType, index: number) => (
            <ActivityTypes
              id={index}
              info={activity.info}
              title={activity.title}
              picture={activity.picture}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

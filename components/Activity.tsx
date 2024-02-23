import { ActivityType } from "@/hooks/types";
import Image, { StaticImageData } from "next/image";
import Food from "@/public/food.jpg";
import Wine from "@/public/tasting.jpg";
import Game from "@/public/game.jpg";

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
      <div className="flex items-center justify-between gap-8">
        {activities.map((activity, index) => (
          <div
            className="mt-5 mx-auto rounded-md border-2 border-yellow-400 py-16 px-5 text-center items-center"
            key={index}
          >
            <Image
              src={activity.picture}
              alt="picture"
              height={380}
              width={400}
              className="rounded-md content-fill"
            />
            <div className="text-3xl font-bold text-gray-700">
              <h1>{activity.title}</h1>
            </div>
            <div className="text-lg text-gray-700">
              <p>{activity.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

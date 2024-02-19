import { MenuType } from "@/hooks/types";
import Burnt from "@/public/burnt-ends-melt.png";
import Six from "@/public/six-shooter.png";
import Bbq from "@/public/bbq-quesadilla.png";
import CardMenu from "./CardMenu";

const menus: Array<MenuType> = [
  {
    id: 1,
    picture: Burnt,
    description:
      "Smokehouse Burnt Ends with provolone & cheddar cheese topped with caramelized onions on sliced sourdough bread.",
    title: "BURNT ENDS MELT",
  },
  {
    id: 2,
    picture: Six,
    description:
      "Baked cheese grits piled high with pulled pork&apos; Southern Coleslaw&apos; pickles&apos; jalapeños and 4R Signature Sauce.",
    title: "SIX SHOOTER",
  },
  {
    id: 3,
    picture: Bbq,
    description:
      "Your choice of meat&apos; cheddar cheese and 4R Signature Sauce on a tortilla and grilled to perfection.",
    title: "BBQ QUESADILLA",
  },
];
export default function Menu() {
  return (
    <section className="mx-auto min-h-full w-5/6 py-10">
      <div className="md:flex items-center justify-between gap-8 mt-2 p-5 m-5">
        {menus.map((menu: MenuType, index) => (
          <CardMenu
            key={index}
            picture={menu.picture}
            title={menu.title}
            description={menu.description}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-yellow-300 m-5 p-5 rounded-md hover:bg-yellow-600">
          Our Menus
        </button>
      </div>
    </section>
  );
}

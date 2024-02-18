import { MenuType } from "@/hooks/types";
import Burnt from "@/public/burnt-ends-melt.png";
import Six from "@/public/six-shooter.png";
import Bbq from "@/public/bbq-quesadilla.png";
import CardMenu from "./CardMenu";

const menus: Array<MenuType> = [
  {
    picture: Burnt,
    description:
      "Smokehouse Burnt Ends with provolone & cheddar cheese topped with caramelized onions on sliced sourdough bread.",
    title: "BURNT ENDS MELT",
  },
  {
    picture: Six,
    description:
      "Baked cheese grits piled high with pulled pork, Southern Coleslaw, pickles, jalapeños and 4R Signature Sauce.",
    title: "SIX SHOOTER",
  },
  {
    picture: Bbq,
    description:
      "Your choice of meat, cheddar cheese and 4R Signature Sauce on a tortilla and grilled to perfection.",
    title: "BBQ QUESADILLA",
  },
];
export default function Menu() {
  return (
    <section className="mx-auto min-h-full w-5/6 py-10">
      <div className="md:flex items-center justify-between gap-8 mt-2 p-5 m-5">
        {menus.map((menu: MenuType) => (
          <CardMenu
            picture={menu.picture}
            title={menu.title}
            description={menu.description}
          />
        ))}
      </div>
    </section>
  );
}

import { MenuType } from "@/hooks/types";
import Burnt from "@/public/burnt-ends-melt.png";
import Six from "@/public/six-shooter.png";
import Bbq from "@/public/bbq-tray_768x535.jpg";
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
  <div className="mx-auto md:flex gap-8 mt-4 justify-between ">
    <div className="mt-5 rounded-md border-2 border-yellow-400 py-16 px-5 text-center">
      {menus.map((menu: MenuType) => (
        <CardMenu
          picture={menu.picture}
          title={menu.title}
          description={menu.description}
        />
      ))}
    </div>
  </div>;
}

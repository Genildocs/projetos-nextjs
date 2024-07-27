import { FaShoppingCart } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function MenuDesktop({ listMenu }) {
  return (
    <>
      <ul className="menuDesktop">
        {listMenu.map((item, index) => (
          <div key={index}>
            <li id={`link-desktop-${index}`} className="!m-0">
              <Link
                href={item.link}
                className="font-open-sans hover:text-primary"
              >
                {item.name}
              </Link>
            </li>
          </div>
        ))}
      </ul>
      <div className=" items-center gap-5 hidden md:flex">
        <div className="flex gap-1 relative">
          <input className="absolute right-8 z-10 hidden" type="text" />
          <button className="flex items-center rounded-full p-2 border-2 border-solid border-secondary hover:bg-secondary z-50">
            <FaSearch className="w-4 h-4 text-primary" />
          </button>
        </div>
        <Link href={"/cart"} className="relative">
          <FaShoppingCart className=" w-7  h-8 text-primary" />
          <span className="absolute p-[0.6rem] flex items-center justify-center -top-1 -right-1 w-4 h-4 text-black font-bold bg-secondary rounded-full ">
            0
          </span>
        </Link>
        <button>
          <BsFillPeopleFill className=" w-7  h-8 text-primary" />
        </button>
      </div>
    </>
  );
}

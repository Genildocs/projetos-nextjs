"use client";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import MenuDesktop from "./MenuDesktop";

export default function Header() {
  const [open, setOpen] = useState(false);

  const listMenu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Product Detail",
      link: "/product-detail",
    },
    {
      name: "Cart",
      link: "/cart",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const list = {
    open: {
      opacity: 1,
      x: 0,
      visibility: "visible",
      transition: { duration: 0.5 },
    },
    hidden: {
      opacity: 0,
      x: -100,
      visibility: "hidden",
      transition: { duration: 0.3 },
    },
  };

  return (
    <header className="mx-6 md:mx-12 lg:mx-24 xl:mx-28 h-20 flex items-center justify-between relative">
      <div>
        <h1 className="text-primary font-raleway font-bold text-3xl md:text-4xl">
          <Link href="/">Fruitables</Link>
        </h1>
      </div>
      <div>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <FiMenu
            className={twMerge(clsx(open ? "hidden" : "h-7 w-7 text-primary"))}
          />
        </button>
        <button onClick={() => setOpen(!open)} className="z-50 md:hidden">
          <FiX
            className={twMerge(clsx(open ? "h-7 w-7 text-primary" : "hidden"))}
          />
        </button>
      </div>
      <motion.ul
        className="menuMobile"
        initial="hidden"
        animate={open ? "open" : "hidden"}
        variants={list}
      >
        {listMenu.map((item, index) => (
          <div key={index}>
            <li id={`link-${index}`}>
              <Link
                href={item.link}
                className="font-open-sans hover:text-primary"
              >
                {item.name}
              </Link>
            </li>
          </div>
        ))}

        <div className="flex items-center gap-5 mt-5">
          <button className="flex items-center rounded-full p-2 border-2 border-solid border-secondary hover:bg-secondary">
            <FaSearch className="w-4 h-4 text-primary" />
          </button>
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
      </motion.ul>
      <MenuDesktop listMenu={listMenu} />
    </header>
  );
}

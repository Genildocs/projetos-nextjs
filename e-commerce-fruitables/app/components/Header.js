'use client';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
const listMenu = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Shop',
    link: '/shop',
  },
  {
    name: 'Product Detail',
    link: '/product-detail',
  },
  {
    name: 'Cart',
    link: '/cart',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];
export default function Header() {
  const [open, setOpen] = useState(true);
  console.log(open);
  return (
    <header className="mx-6 md:mx-12 lg:mx-24 xl:mx-28 h-20 flex items-center justify-between relative">
      <div>
        <h1 className="text-primary font-raleway font-bold text-3xl">
          Fruitables
        </h1>
      </div>
      <div>
        <button onClick={() => setOpen(!open)}>
          <FiMenu
            className={twMerge(clsx(open ? 'h-7 w-7 text-primary' : 'hidden '))}
          />
        </button>
        <button onClick={() => setOpen(!open)} className="z-50">
          <FiX
            className={twMerge(clsx(open ? 'hidden' : 'h-7 w-7 text-primary'))}
          />
        </button>
      </div>
      <motion.ul className={twMerge(clsx(open ? 'hidden' : 'menu md:flex'))}>
        {listMenu.map((item, index) => (
          <div key={index}>
            <li id={`link-${index}`}>
              <Link
                href={item.link}
                className="font-open-sans hover:text-primary">
                {item.name}
              </Link>
            </li>
          </div>
        ))}
      </motion.ul>
    </header>
  );
}

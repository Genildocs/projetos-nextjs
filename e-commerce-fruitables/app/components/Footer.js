'use client';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa';
import { RiMastercardFill } from 'react-icons/ri';
import { FaCcPaypal } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer>
      <div className="bg-bg-main">
        <div className="mx-6 md:mx-12 lg:mx-24 xl:mx-28 pt-12">
          <div>
            <div className="flex flex-col md:flex-row md:justify-between gap-5 ">
              <div>
                <span className="text-primary font-raleway font-semibold text-2xl md:text-4xl">
                  Fruitables
                </span>
                <p className="text-secondary font-raleway font-semibold text-lg">
                  Fresh products
                </p>
              </div>
              <div>
                <div>
                  <input
                    type="text"
                    className="outline-none py-3 border-2 !border-r-0 border-secondary rounded-l-3xl "
                    placeholder="Your Email"
                  />
                  <motion.button
                    className="bg-primary text-white pl-2  py-3 pr-5 border-r-2 border-y-2 rounded-r-3xl border-solid border-secondary"
                    whileHover={{ backgroundColor: '#ffb524' }}
                    transition={{ duration: 0.5 }}>
                    Submit Now
                  </motion.button>
                </div>
              </div>
              <div className="flex justify-end mb-5">
                <button className="mediaSocialBtn">
                  <FaTwitter className="w-4 h-4 fill-secondary hover:fill-black" />
                </button>
                <button className="mediaSocialBtn">
                  <FaFacebookF className="w-4 h-4 fill-secondary hover:fill-black" />
                </button>
                <button className="mediaSocialBtn">
                  <FaYoutube className="w-4 h-4 fill-secondary hover:fill-black" />
                </button>
                <button className="mediaSocialBtn">
                  <FaLinkedinIn className="w-4 h-4 fill-secondary hover:fill-black" />
                </button>
              </div>
            </div>
            <div>
              <div>
                <span>Why People Like us!</span>
                <p>
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the like Aldus PageMaker
                  including of Lorem Ipsum.
                </p>
                <button>Read More</button>
              </div>
              <div>
                <spa>Shop Info</spa>
                <ul>
                  <li>
                    <Link href={'#'}>About Us</Link>
                  </li>
                  <li>
                    <Link href={'#'}>Contact Us</Link>
                  </li>
                  <li>
                    <Link href={'#'}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href={'#'}>Terms & Condition</Link>
                  </li>
                  <li>
                    <Link href={'#'}>Return Policy</Link>
                  </li>
                  <li>
                    <Link href={'#'}>FAQs & Help</Link>
                  </li>
                </ul>
              </div>
              <div>
                <spa>Account</spa>
                <ul>
                  <li>
                    <Link href={'#'}>My Account</Link>
                  </li>
                  <li>
                    <Link href={'#'}>Product details</Link>
                  </li>
                  <li>
                    <Link href={'#'}>Shopping Cart</Link>
                  </li>
                  <li>
                    <Link href={'#'}>Wishlist</Link>
                  </li>
                  <li>
                    <Link href={'#'}>Order History</Link>
                  </li>
                  <li>
                    <Link href={'#'}>International Orders</Link>
                  </li>
                </ul>
              </div>
              <div>
                <spa>Contact</spa>
                <p>Address: 1429 Netus Rd, NY 48247</p>
                <p>Email: Example@gmail.com</p>
                <p>Phone: +0123 4567 8910</p>
                <div>
                  <p>Payment Accepted</p>
                  <FaCcVisa />
                  <RiMastercardFill />
                  <FaCcPaypal />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>Your Site Name, All right reserved.</p>
            <p>Designed By HTML Codex</p>
            <p>Code genildocs</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

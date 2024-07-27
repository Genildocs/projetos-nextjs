"use client";
import { motion } from "framer-motion";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import heroImg_1 from "../../public/assets/img/hero-img-1.png";
import heroImg_2 from "../../public/assets/img/hero-img-2.jpg";
export default function SectionOneHome() {
  return (
    <section className="py-5 md:py-20 flex flex-col gap-10 md:flex-row">
      <div className="md:w-[60%]">
        <p className="text-secondary font-raleway font-bold text-xl">
          100% Organic Foods
        </p>
        <h1 className="text-primary text-4xl md:text-6xl font-raleway font-bold my-5">
          Organic Veggies & Fruits Foods
        </h1>
        <div>
          <input
            type="text"
            className="outline-none py-3 border-2 !border-r-0 border-secondary rounded-l-3xl "
            placeholder="Search"
          />
          <motion.button
            className="bg-primary text-white pl-2  py-3 pr-5 border-r-2 border-y-2 rounded-r-3xl border-solid border-secondary"
            whileHover={{ backgroundColor: "#ffb524" }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            Submit Now
          </motion.button>
        </div>
      </div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 md:w-[calc(100%/2.5)]">
        <Carousel>
          <Image src={heroImg_1} alt="hero fruits" />
          <Image src={heroImg_2} alt="hero vegetables" />
        </Carousel>
      </div>
    </section>
  );
}

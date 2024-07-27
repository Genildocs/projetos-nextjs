"use client";
import { motion } from "framer-motion";
import heroImg from "../public/assets/img/hero-img.jpg";
import SectionOneHome from "./components/SectionOneHome";
export default function page() {
  return (
    <main className="bg-[url('../public/assets/img/hero-img.jpg')] bg-center bg-no-repeat bg-cover">
      <div className="mx-6 md:mx-12 lg:mx-24 xl:mx-28 ">
        <SectionOneHome />
      </div>
    </main>
  );
}

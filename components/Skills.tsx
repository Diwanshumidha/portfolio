"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import useScrollIntersection from "@/lib/useScrollIntersection";
import { motion } from "framer-motion";

const fadeInVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => {
    return {
      opacity: 1,
      y: 0,
      transition:{
        delay: index * 0.08,
      }
    };
  },
};

export default function Skills() {
  const { ref } = useScrollIntersection("Skills", 0.5);
  return (
    <section
      ref={ref}
      className=" mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className=" flex flex-wrap justify-center gap-2 text-gray-800 text-lg ">
        {skillsData.map((item,index) => (
          <motion.li
            variants={fadeInVariant}
            initial="initial"
            whileInView="animate"
            className=" bg-white border-black/[0.1] rounded-xl px-5 py-3 "
            key={item}
            custom={index}
            viewport={{
              once:true,
              
            }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

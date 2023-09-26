'use client'
import Image from "next/image";
import React from "react";
import {motion} from 'framer-motion'
import Link from "next/link";

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import useScrollIntersection from "@/lib/useScrollIntersection";


const Intro = () => {
  const {ref} = useScrollIntersection('Home',0.5)

  return (
    <section ref={ref} className=" mb-28 text-center max-w-[50rem] sm:mb-0 scroll-mt-28 " id="home">
      <div className=" flex items-center justify-center ">
        <div className=" relative">
          <motion.div
           initial={{opacity:0,scale:0}}
           animate={{opacity:1,scale:1}}
            whileHover={{rotateZ:'30deg'}}

           transition={{
            type:'tween',
            duration:0.2
           }}
          >
            <Image
              alt="Profile"
              className=" h-24 w-24 rounded-full object-cover shadow-xl"
              src={
                "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4"
              }
              width={192}
              quality={95}
              height={192}
              priority={true}
            />
          </motion.div>
          <motion.span 
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition={{
              type:'spring',
              stiffness:125,
              delay:0.1,
              duration:0.7
             }}
            className=" absolute right-0 bottom-0 text-4xl ">👌</motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl  font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, scale:1.4 }}
        animate={{ opacity: 1, scale:1 }}
        transition={{
          type:'spring',
          stiffness:70,
          duration:1
        }}
      >
        
        <span className="font-bold">
          Hello, I&apos;m Diwanshu.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer.</span> I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          rel="noopener"
          title="Linkedin"
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          rel="noopener"
          title="Github"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;

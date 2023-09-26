'use client'
import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import Project from "./Project";
import useScrollIntersection from "@/lib/useScrollIntersection";

export default function Projects() {
  const {ref} = useScrollIntersection('Projects',0.3)

  return (
    <section ref={ref} id="projects" className=" scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>

      <div>
        {projectsData.map((item, index) => (
          <Project {...item} key={index} />
        ))}
      </div>
    </section>
  );
}


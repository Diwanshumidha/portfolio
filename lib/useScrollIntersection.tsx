"use client";
import React, { useEffect } from "react";
import { links } from "./data";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/contexts/active-section";

type SectionName = (typeof links)[number]["name"];

export default function useScrollIntersection(
  SectionName: SectionName,
  threshold = 0.75
) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection(SectionName);
    }
  }, [inView, setActiveSection, SectionName]);

  return { ref };
}

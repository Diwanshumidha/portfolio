import SectionDivider from "@/components/SectionDivider";
import Intro from "../components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export const metadata = {
  title:'Diwanshu Midha',
  description:'Welcome to my corner of the web! I am a passionate MERN (MongoDB, Express, React, Node.js) developer, and this is where I showcase my journey through the world of web development.'
}
export default function Home() {
  return (
    <main className=" flex flex-col items-center px-4 w-full ">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  )
}

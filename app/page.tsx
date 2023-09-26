import SectionDivider from "@/components/SectionDivider";
import Intro from "../components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Diwanshu Midha",
  description:
    "Welcome to my corner of the web! I am a passionate MERN (MongoDB, Express, React, Node.js) developer, and this is where I showcase my journey through the world of web development.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  siteName: "Diwanshu Midha Portfolio",
  openGraph: {
    title: "Diwanshu Portfolio",
    description:
      "I am a passionate MERN (MongoDB, Express, React, Node.js) developer, and this is where I showcase my journey through the world of web development.",
    url: "https://diwanshuportfolio.vercel.app/",
    siteName: "Portfolio",
    images: [
      {
        url: "/og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diwanshu Portfolio",
    description:
      "I am a passionate MERN (MongoDB, Express, React, Node.js) developer, and this is where I showcase my journey through the world of web development.",
    images: ["/og.png"],
  },
  category: "technology",
  generator: "Next.js",
  applicationName: "Diwanshu Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Portfolio",
    "Diwanshu",
    "Diwanshu Midha",
    "Deewanshu",
    "Nextjs Portfolio",
    "Fullstack Developer",
    "Web Developer",
    "MERN developer",
    "React",
    "Node.js",
    "MongoDB",
    "web development",
    "JavaScript development",
    "Full-stack web developer",
    "Front-end coding",
    "Back-end programming",
    "Express.js framework",
    "RESTful APIs",
    "Web application development",
    "Database design",
    "Responsive web design",
    "Server-side rendering",
    "UI/UX design",
    "JavaScript libraries",
    "Single-page applications (SPA)",
    "Cross-platform development",
    "Web development tools",
    "Code optimization",
    "Version control (e.g., Git)",
    "Agile development",
    "Software architecture",
    "Debugging and troubleshooting",
    "Portfolio",
  ],
  authors: [{ name: "Diwanshu Midha" }],
  colorScheme: "light",
  creator: "Diwanshu Midha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  verification: {
    google: 'zOmhd2rafpvsPkUgdUby7eFXc3bu7L_3nl4UfDcbNGg',
    other: {
      me: ['saidishu1880@gmail.com'],
    },
  },
};
export default function Home() {
  return (
    <main className=" flex flex-col items-center px-4 w-full ">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

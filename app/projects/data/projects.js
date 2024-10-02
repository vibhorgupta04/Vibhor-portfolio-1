import Crypto from "@/public/projects/main-project/crypto1.png";
import Job from "@/public/projects/main-project/job.png";
import Calculator from "@/public/projects/main-project/calculator.png";

export const projects = [
  {
    title: "Job Portal Application",
    desc: "This project is a Next.js application for a job portal, providing users with a platform to browse job listings, view job descriptions, register as users, and utilize search and filter functionalities. The application features a responsive and modern UI.",
    year: "2023",
    tech: "MERN Stack, NextJS, ReactJS, NodeJS, ExpressJS, MongoDB, Typescript",
    bg: Job,
    slug: "job-portal",
    category: 1,
  },
  {
    title: "CryptoCurrency Dashboard",
    desc: "CryptoCurrency Dashboard is a web application that I created using CoinGecko API to generate crypto currency dashboard.",
    year: "2023",
    tech: "ReactJS, ChartJS, Typescript, Redux, CoinGecko API, Tailwind CSS",
    bg: Crypto,
    slug: "crypto",
    category: 1,
  },
  {
    title: "Calculator",
    desc: "This is a calculator developed using modern CSS and good looking UI.",
    year: "2022",
    tech: "ReactJS, Tailwind CSS",
    bg: Calculator,
    slug: "calculator",
    category: 1,
  },
];

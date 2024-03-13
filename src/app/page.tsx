import Image from "next/image";
import Head from "next/head";
import React from "react";
// import { TracingBeam } from "../components/tracing-beam";

import Header from "../components/header";
import MyTimeline from "../components/my-timeline";
import KitabCard from "../components/cards/kitab-card";
import OpenPortfolioCard from "../components/cards/open-portfolio-card";
import EducationCard from "../components/cards/education-card";
import ExperienceCard from "../components/cards/Experience-card";

export default function Home() {
  return (
    <main>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex min-h-screen flex-col items-center dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
        <div className="pt-10"></div>
        <div className="mt-20 flex flex-col place-items-center px-4">
          <h1 className="text-4xl">Hasan Yousef</h1>
          <h2 className="text-xl mt-1 text-slate-400">Software Engineer</h2>
          <span className="text-xs mt-1 text-slate-400">B.Sc CS Graduate</span>
          <p className="max-w-2xl mt-16 text-slate-300 text-center">
            Passionate software engineer with a love for math and science,
            dedicated to transforming ideas into user-centric products.
            Meticulous in design and committed to excellence. Eager to
            contribute to dynamic endeavors.
          </p>
        </div>
        <div className="flex items-center mt-16">
          <a
            href="https://github.com/HasanYousef"
            target="_blank"
            className=" mx-4"
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert opacity-60 hover:opacity-70"
              src="/GitHub.png"
              alt="GitHub profile link"
              width={19}
              height={19}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/hasan-yousef"
            target="_blank"
            className=" mx-4"
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert opacity-60 hover:opacity-70"
              src="/LinkedIn.png"
              alt="LinkedIn profile link"
              width={18}
              height={18}
            />
          </a>
          <a
            href="https://www.goodreads.com/hasanyousef"
            target="_blank"
            className=" mx-4"
          >
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert opacity-60 hover:opacity-70"
              src="/GoodReads.png"
              alt="GoodReads profile link"
              width={18}
              height={18}
            />
          </a>
        </div>
        <div className="w-full max-w-5xl px-4">
          <div className="w-full flex items-center mt-28 md:mt-48">
            <hr className="flex-1 h-px bg-slate-800 border-0 dark:bg-slate-800" />
            <h2 className="text-slate-300 text-2xl mx-4">Life</h2>
            <hr className="flex-1 h-px bg-slate-800 border-0 dark:bg-slate-800" />
          </div>
          <div className="w-full flex items-start flex-col md:flex-row justify-around mt-8">
            <div className="md:mr-3 flex-1 mb-8 w-full">
              <ExperienceCard />
            </div>
            <div className="md:ml-3 flex-1 w-full">
              <EducationCard />
            </div>
          </div>
        </div>
        <div className="w-full max-w-5xl px-4">
          <div className="w-full flex items-center mt-28 md:mt-48">
            <hr className="flex-1 h-px bg-slate-800 border-0 dark:bg-slate-800" />
            <h2 className="text-slate-300 text-2xl mx-4">Side Projects</h2>
            <hr className="flex-1 h-px bg-slate-800 border-0 dark:bg-slate-800" />
          </div>
          <div className="w-full flex items-start flex-col md:flex-row justify-around mt-8">
            <div className="md:mr-3 mb-8">
              <KitabCard />
            </div>
            <div className="md:ml-3">
              <OpenPortfolioCard />
            </div>
          </div>
        </div>
        <a
          href="https://github.com/HasanYousef/open-portfolio"
          className="max-w-5xl px-4 mb-6 mt-28 md:mt-48 text-slate-400 hover:text-slate-300 flex flex-col items-center text-xs"
        >
          <span>Designed & built by Hasan</span>
          <div className="flex">
            <span>Git fork it now →</span>
          </div>
        </a>
      </div>
    </main>
  );
}

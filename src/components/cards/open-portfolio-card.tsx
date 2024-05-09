"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../3d-card";

export default function OpenPortfolioCard() {
  return (
    <CardContainer className="inter-var mb-8">
      <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          as="h3"
          className="text-xl font-bold text-neutral-600 text-white"
        >
          Open Portfolio
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 text-neutral-300"
        >
          <p className="mb-2">
            An <span className="font-bold">open source</span> and free to use
            web portfolio that helps candidates introduce themselves
            professionally.
          </p>
          <p className="text-neutral-500 text-xs">
            React.js, Next.js & Tailwind CSS
          </p>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/open-portfolio.png"
            height="1000"
            width="1000"
            className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem translateZ="80">
          <a
            href="https://kitab.pro"
            target="_blank"
            className="py-2 group rounded-xl text-sm font-normal text-white flex items-center mt-4"
          >
            <Image
              src="/web.png"
              height="50"
              width="50"
              className="w-4 mr-2"
              alt="Globe icon"
            />
            <span className="mr-1">Web</span>
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
          </a>
          <a
            href="https://github.com/HasanYousef/open-portfolio"
            target="_blank"
            className="py-2 group rounded-xl text-sm font-normal text-white flex items-center mt-2"
          >
            <Image
              src="/GitHub-white.png"
              height="50"
              width="50"
              className="w-4 mr-2"
              alt="GitHub logo"
            />
            <span className="mr-1">GitHub</span>
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
          </a>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

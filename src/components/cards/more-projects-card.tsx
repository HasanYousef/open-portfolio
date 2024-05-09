"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../3d-card";

export default function MoreProjectsCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          as="h3"
          className="text-xl w-full font-bold text-neutral-600 text-white flex items-center mb-6"
        >
          <Image
            src="/folder.png"
            height="50"
            width="50"
            className="w-7 mr-3 invert"
            alt="Job icon"
          />
          <span>+10 Repositories</span>
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 text-neutral-300 bg-slate"
        >
          <p className="mb-2 w-full">
            I created various projects with my friends during college, some
            purely for enjoyment and others specifically for job interviews.
            These projects are publicly accessible and showcase my collaborative
            efforts.
          </p>
        </CardItem>
        <CardItem translateZ="80">
          <a
            href="https://github.com/HasanYousef?tab=repositories"
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

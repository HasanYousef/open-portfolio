"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../3d-card";
import { Meteors } from "../meteors";

export default function EducationCard() {
  return (
    <CardContainer className="inter-var w-full overflow-hidden">
      <CardBody className="bg-gray-50 w-full relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="20"
          as="h3"
          className="text-xl w-full font-bold text-neutral-600 dark:text-white flex items-center mb-6"
        >
          <Image
            src="/education.png"
            height="50"
            width="50"
            className="w-7 mr-3"
            alt="Education icon"
          />
          <span>Education</span>
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
        >
          <p className="mb-1 font-bold">B.Sc Computer Science</p>
          <p className="mb-1 text-xs">
            2019-2023 • Hadassah Academic College, Jerusalem
          </p>
          <p className="text-neutral-500 text-xs">
            Data Structures, Algorithms & Applied Math
          </p>
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-sm mt-4 dark:text-neutral-300"
        >
          <p className="mb-1 font-bold">
            Supervised Machine Learning: Regression and Classification
          </p>
          <p className="mb-1 text-xs">
            2021 • Stanford Online - Stanford University
          </p>
          <p className="text-neutral-500 mb-1 text-xs">
            Algebra, Machine Learning & MATLAB
          </p>
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-sm mt-4 dark:text-neutral-300"
        >
          <p className="mb-1 font-bold">Microservices with Node JS and React</p>
          <p className="mb-1 text-xs">2022 • Udemy</p>
          <p className="text-neutral-500 text-xs">
            Docker, Containers & Databases
          </p>
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-sm mt-4 dark:text-neutral-300"
        >
          <p className="mb-1 font-bold">Advanced Game Development</p>
          <p className="mb-1 text-xs">2023 • Vector School, Tel-Aviv</p>
          <p className="text-neutral-500 mb-1 text-xs">Unity3D & C#</p>
        </CardItem>
      </CardBody>
      <Meteors number={14} />
    </CardContainer>
  );
}

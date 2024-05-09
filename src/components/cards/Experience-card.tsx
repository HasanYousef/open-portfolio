"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../3d-card";
import { Meteors } from "../meteors";

export default function ExperienceCard() {
  return (
    <CardContainer className="inter-var w-full overflow-hidden">
      <CardBody className="bg-gray-50 w-full relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="20"
          as="h3"
          className="text-xl w-full font-bold text-neutral-600 text-white flex items-center mb-6"
        >
          <Image
            src="/job.png"
            height="50"
            width="50"
            className="w-7 mr-3"
            alt="Job icon"
          />
          <span>Experience</span>
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-neutral-500 text-sm mt-2 text-neutral-300"
        >
          <p className="mb-1 font-bold">Software Engineer • 2yrs</p>
          <p className="mb-1 text-xs">
            Aug 2022 - Current • Obscure Games, Herzliya
          </p>
        </CardItem>
        <CardItem
          translateZ="40"
          className="text-neutral-500 text-sm mt-2 text-neutral-300"
        >
          <ul className="mt-3 mb-2 list-disc text-xs text-neutral-400">
            <li className="mb-1">
              Develop in-app-purchases and subscriptions (buy in-game goods and
              currencies with real money)
            </li>
            <li className="mb-1">
              Integrate data-gathering tools to develop new marketing strategies
              (SnowFlake, AppsFlyer, etc…)
            </li>
            <li className="mb-1">
              Develop secured data structures to store players’ data on the
              cloud (GCP and PlayFab on Azure)
            </li>
          </ul>
          <p className="text-neutral-500 text-xs">
            C#, Node.js, Google Cloud (GCP), AWS, Firebase & TeamCity
          </p>
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-neutral-500 text-sm mt-6 text-neutral-300"
        >
          <p className="mb-1 font-bold">Student Position • 6mos</p>
          <p className="mb-1 text-xs">
            Jan 2022 - Jul 2022 • Obscure Games, Tel-Aviv
          </p>
        </CardItem>
        <CardItem
          translateZ="40"
          className="text-neutral-500 text-sm text-neutral-300"
        >
          <ul className="mt-3 mb-2 list-disc text-xs text-neutral-400">
            <li className="mb-1">
              Cooperate with the artists to build and develop the UI
            </li>
            <li className="mb-1">
              Develop algorithms and data structures to run enemy bots
            </li>
          </ul>
          <p className="text-neutral-500 text-xs">Unity3D, C# & Jenkins</p>
        </CardItem>
      </CardBody>
      <Meteors number={14} />
    </CardContainer>
  );
}

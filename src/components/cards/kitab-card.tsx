"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../3d-card";

export default function KitabCard() {
  return (
    <CardContainer className="inter-var mb-8">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          as="h3"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Kitab
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
        >
          <p className="mb-2">
            The app got <span className="font-bold">+100K</span> visits by{" "}
            <span className="font-bold">+15K</span> different users.
          </p>
          <p className="mb-2">
            Kitab{"'"}s community consists of{" "}
            <span className="font-bold">+5K</span> active users - high school
            students and graduates.
          </p>
          <p className="mb-2">
            Kitab{"'"}s Smart Assistant answered{" "}
            <span className="font-bold">+10K</span> questions - a GPT based chat
            bot injected with data about <span className="font-bold">+250</span>{" "}
            college programs.
          </p>
          <p className="text-neutral-500 text-xs">
            Node.js, Flutter, Dart, React.js, Next.js, MaterialUI, MongoDB,
            Vector Databases, AWS S3, Firebase & OpenAI
          </p>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/kitab.png"
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
            className="py-2 group rounded-xl text-sm font-normal dark:text-white flex items-center mt-4"
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
            href="https://apps.apple.com/us/app/kitab-%D9%83%D8%AA%D8%A7%D8%A8/id6467742160"
            target="_blank"
            className="py-2 group rounded-xl text-sm font-normal dark:text-white flex items-center mt-2"
          >
            <Image
              src="/apple.png"
              height="50"
              width="50"
              className="w-4 mr-2"
              alt="App Store logo"
            />
            <span className="mr-1">App Store</span>
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=pro.kitab.app"
            target="_blank"
            className="py-2 group rounded-xl text-sm font-normal dark:text-white flex items-center mt-2"
          >
            <Image
              src="/android.png"
              height="50"
              width="50"
              className="w-4 mr-2"
              alt="Google Play logo"
            />
            <span className="mr-1">Google Play</span>
            <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
              -&gt;
            </span>
          </a>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

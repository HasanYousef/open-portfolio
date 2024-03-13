"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { CardBody, CardContainer, CardItem } from "../3d-card";

export default function FaceTrackingCard() {
  const [isPlaying, setIsPlaying] = useState(true);
  const vidRef = useRef<HTMLVideoElement>(null);
  const playPause = () => {
    if (vidRef !== null && vidRef.current !== null) {
      if (isPlaying) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  return (
    <CardContainer className="inter-var mb-8">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          as="h3"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Face Tracking 3D Parallax
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
        >
          <p className="mb-2">
            My final college project that I built with my roomate. It{"'"}s a
            generic 3D face tracking control that can be used in Unity3D
            projects.
          </p>
          <p className="mb-2">
            Super easy to implement and doesn{"'"}t require any external
            hardware - relies on devices{"'"} front camera for the main input.
          </p>
          <p className="text-neutral-500 text-xs">C# & Unity3D</p>
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <video
            src="/vid.mp4"
            muted
            controls={false}
            loop
            autoPlay
            ref={vidRef}
            className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
          />
          <button
            onClick={playPause}
            className="absolute top-3 right-3 dark:invert opacity-70"
          >
            <Image
              src="/play.png"
              height="16"
              width="16"
              alt="/play.png"
              className={isPlaying ? "hidden" : ""}
            />
            <Image
              src="/pause.png"
              height="16"
              width="16"
              alt="/pause.png"
              className={!isPlaying ? "hidden" : ""}
            />
          </button>
        </CardItem>
        <CardItem translateZ="80">
          <a
            href="https://github.com/HasanYousef/Unity3D-HeadTracking"
            target="_blank"
            className="py-2 group rounded-xl text-sm font-normal dark:text-white flex items-center mt-4"
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

// note: may need to run 'vercel --prod' after pushing to main to get vercel to work
"use client";
import TopNavbar from "@/components/top-navbar/TopNavbar";
import React, { useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

export default function Home() {
  const sections = [
    {
      headerTitle: "About Me",
      headerRef: useRef(null),
      headerID: "about",
    },
    {
      headerTitle: "Projects",
      headerRef: useRef(null),
      headerID: "projects",
    },
    {
      headerTitle: "Contact Me",
      headerRef: useRef(null),
      headerID: "contact",
    },
  ];

  return (
    <>
      <main className="center-all">
        <TopNavbar sections={sections} />
        <div
          id={sections[0].headerID}
          ref={sections[0].headerRef}
          className="center-all h-screen-minus-4rem w-full border-solid border-red-400 border-1"
        >
          <ScrollAnimation animateIn="fadeIn">
            <h1 className="text-4xl">{sections[0].headerTitle}</h1>
          </ScrollAnimation>
        </div>
        <div
          id={sections[1].headerID}
          ref={sections[1].headerRef}
          className="center-all h-screen-minus-4rem w-full border-solid border-red-400 border-1"
        >
          <ScrollAnimation animateIn="fadeIn">
            <p className="text-4xl">{sections[1].headerTitle}</p>
          </ScrollAnimation>
        </div>
        <div
          id={sections[2].headerID}
          ref={sections[2].headerRef}
          className="center-all h-screen-minus-4rem w-full border-solid border-red-400 border-1"
        >
          <ScrollAnimation animateIn="fadeIn">
            <p className="text-4xl">{sections[2].headerTitle}</p>
          </ScrollAnimation>
        </div>
      </main>
    </>
  );
}

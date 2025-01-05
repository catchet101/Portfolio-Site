"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
} from "@nextui-org/react";

interface Section {
  headerTitle: string;
  headerRef: React.MutableRefObject<any>;
  headerID: string;
}

interface Props {
  sections: Section[];
}

const TopNavbar: React.FC<Props> = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // On user scroll, calculates the section that they're nearest to to highlight accordingly in the navbar
  useEffect(() => {
    const handleScroll = (e: any) => {
      var index = nearestIndex(
        window.scrollY,
        sections,
        0,
        sections.length - 1,
      );
      setActiveIndex(index);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculates which section on the page the user is closest to
  const nearestIndex = (
    currentPosition: number,
    sectionPositionArray: Section[],
    startIndex: number,
    endIndex: number,
  ) => {
    if (startIndex === endIndex) return startIndex;
    else if (startIndex === endIndex - 1) {
      if (
        Math.abs(
          sectionPositionArray[startIndex].headerRef.current.offsetTop -
            currentPosition,
        ) <
        Math.abs(
          sectionPositionArray[endIndex].headerRef.current.offsetTop -
            currentPosition,
        )
      )
        return startIndex;
      else return endIndex;
    } else {
      var nextNearest = ~~((startIndex + endIndex) / 2);
      var a = Math.abs(
        sectionPositionArray[nextNearest].headerRef.current.offsetTop -
          currentPosition,
      );
      var b = Math.abs(
        sectionPositionArray[nextNearest + 1].headerRef.current.offsetTop -
          currentPosition,
      );
      if (a < b) {
        return nearestIndex(
          currentPosition,
          sectionPositionArray,
          startIndex,
          nextNearest,
        );
      } else {
        return nearestIndex(
          currentPosition,
          sectionPositionArray,
          nextNearest,
          endIndex,
        );
      }
    }
  };

  // Scrolls to a section with an offset to account for navbar
  const scrollToSection = (section: Section) => {
    const target = document.getElementById(section.headerID);
    if (target) {
      const offset = 64;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Navbar className="bg-slate-200">
      <NavbarContent
        className="flex justify-center items-center mx-auto gap-4 sm:gap-8 md:gap-12"
        justify="center"
      >
        {sections.map((section, index) => (
          <NavbarItem key={index}>
            <Link
              color={activeIndex === index ? "primary" : "foreground"}
              className="cursor-pointer"
              size="lg"
              onPress={(e) => scrollToSection(section)}
            >
              {section.headerTitle}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default TopNavbar;

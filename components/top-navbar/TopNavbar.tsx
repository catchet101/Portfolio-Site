import React from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const TopNavbar = () => {
  return (
    <Navbar shouldHideOnScroll className="bg-slate-200">
      {/* <Button as={Link} color="primary">
        <p className="font-bold text-inherit">Cameron Lee</p>
      </Button> */}
      <NavbarContent justify="start">
        <NavbarItem>
          <Link color="foreground" href="#">
            Cameron Lee
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex sm:mx-auto gap-4"
        justify="center"
      >
        <NavbarItem>
          <Link color="foreground" href="#">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact Me
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" />
    </Navbar>
  );
};

export default TopNavbar;

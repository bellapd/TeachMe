import React from "react";
import NavbarRegister from "@/components/NavbarRegister";
import Jumbotron from "@/components/Jumbotron";
import About from "@/components/About";
import Howtouse from "@/components/Howtouse";
import { useUser, useClerk } from "@clerk/clerk-react";
import RegisterNavbar from "../components/NavbarRegister";

function dashboard() {
  const { user } = useUser();
  const { user: clerkUser } = useClerk();

  if (user && clerkUser) {
    return (
      <div>
        <NavbarRegister />
        <Jumbotron />
        <About />
        <Howtouse />
      </div>
    );
  }
  return (
    <div>
      <NavbarRegister />
      <Jumbotron />
      <About />
      <Howtouse />
    </div>
  );
}

export default dashboard;

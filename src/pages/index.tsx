import React from "react";
import Jumbotron from "../components/Jumbotron";
import About from "../components/About";
import Howtouse from "../components/Howtouse";
import Navbar from "../components/Navbar";
import { useUser, useClerk } from "@clerk/clerk-react";
import RegisterNavbar from "../components/NavbarRegister";
import { Reveal } from "@/components/reveal";

export default function Home() {
  const { user } = useUser();
  const { user: clerkUser } = useClerk();

  if (user && clerkUser) {
    return (
      <>
        <RegisterNavbar />
        <Jumbotron />
        <About />
        <Howtouse />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <Jumbotron />
      <About />
      <Howtouse />
    </>
  );
}

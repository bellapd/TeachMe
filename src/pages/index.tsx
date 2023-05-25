import React from "react";
import Jumbotron from "../components/Jumbotron";
import About from "../components/About";
import Howtouse from "../components/Howtouse";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Jumbotron />
      <About />
      <Howtouse />
    </>
  );
}

import React from "react";
import NavbarRegister from "@/components/NavbarRegister";
import Jumbotron from "@/components/Jumbotron";
import About from "@/components/About";
import Howtouse from "@/components/Howtouse";

function dashboard() {
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

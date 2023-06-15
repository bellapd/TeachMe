import React from "react";
import Commies from "../components/communityCard"
import Navbar from "../components/Navbar"
import { useUser, useClerk } from "@clerk/clerk-react";
import RegisterNavbar from "../components/NavbarRegister";

function communities() {
  const { user } = useUser();
  const { user: clerkUser } = useClerk();

  if (user && clerkUser) {
    return (
      <>
        <RegisterNavbar />
        <Commies />
      </>
    );
  }
  return (
    <>
      <Navbar/>
      <Commies/>
    </>
  );
}

export default communities;

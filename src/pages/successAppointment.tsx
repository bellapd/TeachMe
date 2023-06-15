import React from "react";
import Navbar from "../components/Navbar";
import SuccessJumbo from "../components/successJumbotron";
import { useUser, useClerk } from "@clerk/clerk-react";
import RegisterNavbar from "../components/NavbarRegister";

export default function successAppointment() {
  const { user } = useUser();
  const { user: clerkUser } = useClerk();

  if (user && clerkUser) {
    return (
      <>
        <RegisterNavbar />
        <SuccessJumbo />
      </>
    );
  }
  return (
    <>
    <Navbar></Navbar>
    <SuccessJumbo/>
    </>
  );
}


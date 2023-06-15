import React from "react";
import App from "../components/Docker";
import Navbar from "../components/Navbar";
import { useUser, useClerk } from "@clerk/clerk-react";
import RegisterNavbar from "../components/NavbarRegister";

function Docker() {
  const { user } = useUser();
  const { user: clerkUser } = useClerk();

  if (user && clerkUser) {
    return (
      <>
      <Navbar />
      <App />
    </>
    );
  }
  return (
    <>
      <Navbar />
      <App />
    </>
  );
}

export default Docker;

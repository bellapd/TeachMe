import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Footer from "../components/Footer";
import Example from "../components/Navbar";
import { useUser, useClerk } from "@clerk/clerk-react";
import RegisterNavbar from "../components/NavbarRegister";

export default function Coba2() {
  const { user } = useUser();
  const { user: clerkUser } = useClerk();

  if (user && clerkUser) {
    return (
      <>
        <RegisterNavbar />
        <Profile />
      </>
    );
  }
  return (
    <>
      <Navbar />
      <Profile />
    </>
  );
}

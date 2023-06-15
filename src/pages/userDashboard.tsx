import React from "react";
import Navbar from "../components/Navbar";
import UserDash from "../components/userDash"
import { useUser, useClerk } from "@clerk/clerk-react";
import RegisterNavbar from "../components/NavbarRegister";
import { User } from "@clerk/clerk-sdk-node";

function userDashboard() {
  const { user } = useUser();
  const { user: clerkUser } = useClerk();

  if (user && clerkUser) {
    return (
      <>
        <RegisterNavbar />
        <UserDash />
      </>
    );
  }
  return (
    <>
    <Navbar/>
    <UserDash/>
    </>

  );
}

export default userDashboard;

import React from "react";
import Signinpage from "../components/Signin";
import Navbar from "../components/Navbar";
import { useUser, useClerk } from "@clerk/clerk-react";
import RegisterNavbar from "../components/NavbarRegister";


function signin() {
  const { user } = useUser();
  const { user: clerkUser } = useClerk();

  if (user && clerkUser) {
    return (
      <div>
        <RegisterNavbar />
        <Signinpage />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Signinpage />
    </div>
  );
}

export default signin;

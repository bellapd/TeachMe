import React from "react";
import Navbar from "../components/Navbar";
import SignUp from "../components/Signup";
import { useUser, useClerk } from "@clerk/clerk-react";
import RegisterNavbar from "../components/NavbarRegister";

function signup() {
  const { user } = useUser();
  const { user: clerkUser } = useClerk();

  if (user && clerkUser) {
    return (
      <div>
        <RegisterNavbar />
        <SignUp />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <SignUp />
    </div>
  );
}

export default signup;

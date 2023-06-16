import React from "react";
import Navbar from "../components/Navbar";
import SignUp from "../components/Signup";
import Dashboard from "./dashboard";
import { useUser, useClerk, SignedOut } from "@clerk/clerk-react";

function signup() {
  const { user } = useUser();
  const { user: clerkUser } = useClerk();

  if (user && clerkUser) {
    return (
      <div>
        <Dashboard />

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

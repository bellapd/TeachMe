import React from "react";
import Signinpage from "../components/Signin";
import Navbar from "../components/Navbar";
import { useUser, useClerk } from "@clerk/clerk-react";
import Dashboard from "./dashboard";


function signin() {
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
      <Signinpage />
    </div>
  );
}

export default signin;

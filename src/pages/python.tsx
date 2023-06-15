import React from "react";
import App from "../components/Python";
import Navbar from "../components/Navbar";
import { useUser, useClerk } from "@clerk/clerk-react";
import RegisterNavbar from "../components/NavbarRegister";

function Python() {
  const { user } = useUser();
  const { user: clerkUser } = useClerk();

  if (user && clerkUser) {
    return (
      <>
        <RegisterNavbar />
        <App />
      </>
    );
  }
  return (
    <>
      <Navbar/>
      <App/>
    </>
  );
}

export default Python;
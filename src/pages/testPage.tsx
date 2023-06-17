import React from "react";
import Navbar from "../components/Navbar";
import UserDash from "../components/userDash"
import { useUser, useClerk } from "@clerk/clerk-react";
import RegisterNavbar from "../components/NavbarRegister";
import { User } from "@clerk/clerk-sdk-node";
import RatingPopup from "../components/RatingPopup";

function userDashboard() {
    return(
    <>
    <Navbar/>
    <RatingPopup/>
    </>
  );
}

export default userDashboard;

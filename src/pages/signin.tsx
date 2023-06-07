// import { SignIn } from "@clerk/clerk-react";

// const Signin = () => {
//   return <SignIn path="/signin" routing="path" />;
// };

// export default Signin;

import React from "react";
import Signinpage from "../components/Signin";
import Navbar from "../components/Navbar";

function signin() {
  return (
    <div>
      <Navbar />
      <Signinpage />
    </div>
  );
}

export default signin;

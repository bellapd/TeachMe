import { SignIn } from "@clerk/clerk-react";

const Signin = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <SignIn path="/signin" routing="path" />
    </div>
  );
};

export default Signin;

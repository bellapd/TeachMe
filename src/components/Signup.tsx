import { RedirectToSignUp, SignUp } from "@clerk/nextjs";
import Image from "next/image";
import { SignedOut } from "@clerk/clerk-react";

const Signup = () => {
  return (
    <div className="flex bg-[#4700C6]">
      {/* Image component */}
      <div className="w-1/2 flex justify-center items-center p-7 ml-10">
        <Image
          src="/images/signup.svg"
          width={500}
          height={500}
          alt="signup"
          priority={true}
        />
      </div>

      {/* Sign-up form */}
      <div className="w-1/2 flex justify-center items-center p-7">
        <SignedOut>
          <SignUp/>
          <RedirectToSignUp />
        </SignedOut>
      </div>
    </div>
  );
};

export default Signup;

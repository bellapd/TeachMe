import { RedirectToSignUp, SignUp } from "@clerk/nextjs";
import Image from "next/image";
import { SignedOut } from "@clerk/clerk-react";

const Signup = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#4700C6]">
      {/* Image component */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-7">
        <Image
          src="/images/signup.svg"
          width={500}
          height={500}
          alt="signup"
          priority={true}
        />
      </div>

      {/* Sign-up form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-5">
        <div className="w-full max-w-md">
          <SignedOut>
            <SignUp />
            <RedirectToSignUp />
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Signup;

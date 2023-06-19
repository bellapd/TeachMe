import { SignIn } from "@clerk/nextjs/app-beta";
import Image from "next/image";
import { RedirectToSignIn, SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client";

const Signin = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-[#4700C6]">
      <div className="sm:w-1/2 flex justify-center items-center p-7">
        <Image src="/images/signin.svg" width={450} height={450} alt="signin" />
      </div>

      <div className="sm:w-1/2 flex flex-col justify-center items-center p-7">
        <SignedOut>
          <SignIn/>
          <RedirectToSignIn />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Signin;
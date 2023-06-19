import { SignIn } from "@clerk/nextjs/app-beta";
import Image from "next/image";
import { RedirectToSignIn, SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client";

const Signin = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#4700C6]">
      <div className="w-full md:w-1/2 flex justify-center items-center p-5">
        <Image src="/images/signin.svg" width={450} height={450} alt="signin" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-5">
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className="mt-3">
          <SignedOut>
            <SignIn />
            <RedirectToSignIn />
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Signin;

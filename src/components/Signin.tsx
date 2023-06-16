import { SignIn } from "@clerk/nextjs/app-beta";
import Image from "next/image";
import { RedirectToSignIn, SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client";

const Signin = () => {
  return (
    <div className="flex bg-[#4700C6]">
      <div className="hidden">
        {/* <Image
          src="/images/geometry3.svg"
          width={350}
          height={350}
          alt="geometry3"
          className="object-cover"
        /> */}
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="rounded border border-gray-400 px-3 py-0.5">
              Sign in
            </button>
          </SignInButton>
        </SignedOut>
      </div>
      <div className="w-1/2 flex justify-center items-center p-7 ml-10">
        <Image src="/images/signin.svg" width={450} height={450} alt="signin" />
      </div>

      <div className="w-1/2 flex justify-center items-center p-7">
        <SignedOut>
          <SignIn/>
          <RedirectToSignIn />
        </SignedOut>
      </div>
    </div>
  );
};

export default Signin;

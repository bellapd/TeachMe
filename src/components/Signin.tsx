import { SignIn } from "@clerk/nextjs/app-beta";
import Image from "next/image";

const Signin = () => {
  return (
    <div className="flex bg-[#4700C6]">
      <div className="hidden md:block">
        {/* <Image
          src="/images/geometry3.svg"
          width={350}
          height={350}
          alt="geometry3"
          className="object-cover"
        /> */}
      </div>
      <div className="w-1/2 flex justify-center items-center p-7 ml-10">
        <Image src="/images/signin.svg" width={450} height={450} alt="signin" />
      </div>
      <div className="w-1/2 flex justify-center items-center p-7">
        <SignIn path="/signin" routing="path" signUpUrl="/signup" />
      </div>
    </div>
  );
};

export default Signin;

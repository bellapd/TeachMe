import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  function Dashboard() {
    return (
      <>
        <Typography>
        <Link href="/userDashboard" className="flex items-center focus:outline-none scale-100 hover:scale-150 ease-in duration-200">
          Dashboard
        </Link>
        </Typography>
        <div className="flex items-center focus:outline-none scale-100 hover:scale-150 ease-in duration-200">
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton />
        </SignedOut>
        </div>
        
      </>
    );
  }
  const navList = (
    <div className="flex items-center gap-6">
      <Typography variant="small" color="blue-gray" className="font-normal">
        {router.pathname === "/" ? (
          <a
            href="#JumpAbout"
            className=" flex items-center focus:outline-none scale-100 hover:scale-150 ease-in duration-200"
          >
            About
          </a>
        ) : (
          <Link href="/about" className=" flex items-center focus:outline-none scale-100 hover:scale-150 ease-in duration-200">
              About
          </Link>
        )}
      </Typography>
      <Typography variant="small" color="blue-gray" className="font-normal">
        <Link href="/communities" className=" flex items-center focus:outline-none scale-100 hover:scale-150 ease-in duration-200">
          Community
        </Link>
      </Typography>
      <div className="relative">
        <Typography variant="small" color="blue-gray" className="font-normal">
          <a
            href="#"
            className=" flex items-center focus:outline-none scale-100 hover:scale-150 ease-in duration-200"
            onClick={toggleDropdown}
          >
            Course
          </a>
        </Typography>
        {openDropdown && (
          <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <Link
                href="/python"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Python
              </Link>
              <Link
                href="/c"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                C
              </Link>
              <Link
                href="/docker"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Docker
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-[#4700C6]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center focus:outline-none scale-100 hover:scale-150 ease-in duration-200">
              <Image
                src="/images/logonav.svg"
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
            <div className="hidden lg:block">{navList}</div>
          </div>
          <div className="flex items-center gap-4 ">
            <Dashboard />
          </div>
        </div>
      </Navbar>
    </>
  );
}

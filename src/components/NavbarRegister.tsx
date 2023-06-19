import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <nav className="bg-[#4700C6] sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white text-lg font-semibold">
                <Image
                  src="/images/logonav.svg"
                  alt="logo"
                  width={150}
                  height={150}>
                  
                </Image>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="/#JumpAbout" className="text-white hover:bg-[#c29ef5] hover:text-white px-3 py-2 rounded-md text-md font-medium">
                  About
                </Link>
                <Link href="/communities" className="text-white hover:bg-[#c29ef5] hover:text-white px-3 py-2 rounded-md text-md font-medium">
                  Community
                </Link>
                <div className="relative">
                  <button
                    className="text-white hover:bg-[#c29ef5] hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    onClick={toggleMobileMenu}
                  >
                    Courses
                  </button>
                  {isMobileMenuOpen && (
                    <div className="absolute z-10 left-0 mt-2 w-40 bg-white divide-y divide-gray-200 rounded-md shadow-lg">
                      <Link href="/c" passHref>
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#c29ef5]-100 cursor-pointer">C</div>
                      </Link>
                      <Link href="/python" passHref>
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Python</div>
                      </Link>
                      <Link href="/docker" passHref>
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Docker</div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/userDashboard" className="text-white hover:bg-[#c29ef5] hover:text-white px-3 py-2 rounded-md text-md font-medium">
              Dashboard
            </Link>
            <div className="text-white hover:bg-[#c29ef5] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <SignedIn>
                    {/* Mount the UserButton component */}
                    <UserButton />
                  </SignedIn>
                  <SignedOut>
                    {/* Signed out users get sign in button */}
                    <SignInButton />
              </SignedOut>
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              type="button"
              className="text-white px-3 py-2 rounded-md text-xl font-bold"
              onClick={toggleMobileMenu}
            >
              <AiOutlineMenu/>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className=" block px-4 py-2 rounded-md text-base font-medium">
                <SignedIn>
                  {/* Mount the UserButton component */}
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  {/* Signed out users get sign in button */}
                  <SignInButton />
                </SignedOut>
            </div>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/userDashboard" className="text-white block px-3 py-2 rounded-md text-base font-medium">
                  Dashboard
                </Link>
                <Link
                href="/#JumpAbout"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>
              <Link
                href="/communities"
                className="text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Community
              </Link>
              <div className="relative">
                <button
                  className="text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={toggleDropdown}
                >
                  Courses
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-10 left-0 mt-2 w-40 bg-white divide-y divide-gray-200 rounded-md shadow-lg">
                    <Link href="/c" passHref>
                      <div className="block px-4 py-2 text-sm text-black hover:bg-[#c29ef5] hover:text-white  cursor-pointer">
                        C
                      </div>
                    </Link>
                    <Link href="/python" passHref>
                      <div className="block px-4 py-2 text-sm text-black hover:bg-[#c29ef5] hover:text-white  cursor-pointer">
                        Python
                      </div>
                    </Link>
                    <Link href="/docker" passHref>
                      <div className="block px-4 py-2 text-sm text-black hover:bg-[#c29ef5] hover:text-white  cursor-pointer">
                        Docker
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
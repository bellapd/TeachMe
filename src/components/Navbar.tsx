import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';

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
                  height={150}
                />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  href="/#JumpAbout"
                  className="text-white hover:bg-[#c29ef5] hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
                  About
                </Link>
                <Link
                  href="/communities"
                  className="text-white hover:bg-[#c29ef5] hover:text-white px-3 py-2 rounded-md text-md font-medium"
                >
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
                        <div className="block px-4 py-2 text-sm hover:bg-[#c29ef5] hover:text-white  cursor-pointer">
                          C
                        </div>
                      </Link>
                      <Link href="/python" passHref>
                        <div className="block px-4 py-2 text-sm hover:bg-[#c29ef5] hover:text-white  cursor-pointer">
                          Python
                        </div>
                      </Link>
                      <Link href="/docker" passHref>
                        <div className="block px-4 py-2 text-sm hover:bg-[#c29ef5] hover:text-white  cursor-pointer">
                          Docker
                        </div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="/signup"
              className="text-white hover:bg-[#c29ef5] hover:text-white px-3 py-2 rounded-md text-md font-medium"
            >
              Sign Up
            </Link>
            <Link
              href="/signin"
              className="text-white hover:bg-[#c29ef5] hover:text-white px-3 py-2 rounded-md text-md font-medium"
            >
              Sign In
            </Link>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              type="button"
              className="text-white px-3 py-2 rounded-md text-xl font-bold"
              onClick={toggleMobileMenu}
            >
              <AiOutlineMenu />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
                href="/signin"
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                <button className="bg-[#c29ef5] text-white font-bold py-2 px-4 rounded-lg">
                  Sign In
                </button>
              </Link>
              <Link
                href="/signup"
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                <button className="bg-[#c29ef5] text-white font-bold py-2 px-4 rounded-lg">
                  Sign Up
                </button>
              </Link>
              <Link
                href="/#JumpAbout"
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>
              <Link
                href="/communities"
                className="block px-3 py-2 rounded-md text-base font-medium"
              >
                Community
              </Link>
              <div className="relative">
                <button
                  className="block px-3 py-2 rounded-md text-base font-medium"
                  onClick={toggleDropdown}
                >
                  Courses
                </button>
                {isDropdownOpen && (
                  <div className="-mb-2 absolute z-10 left-0 mt-2 w-40 bg-white divide-y divide-gray-200 rounded-md shadow-lg">
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

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
                  width={100}
                  height={100}>
                  
                </Image>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href="#JumpAbout" className="text-gray-300 hover:bg-[#c29ef5] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/communities" className="text-gray-300 hover:bg-[#c29ef5] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Community
                </Link>
                <div className="relative">
                  <button
                    className="text-gray-300 hover:bg-[#c29ef5] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    onClick={toggleMobileMenu}
                  >
                    Courses
                  </button>
                  {isMobileMenuOpen && (
                    <div className="absolute z-10 left-0 mt-2 w-40 bg-white divide-y divide-gray-200 rounded-md shadow-lg">
                      <Link href="/courses/c" passHref>
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">C</div>
                      </Link>
                      <Link href="/courses/python" passHref>
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Python</div>
                      </Link>
                      <Link href="/courses/docker" passHref>
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Docker</div>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/signup" className="text-gray-300 hover:bg-[#c29ef5] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Sign Up
            </Link>
            <Link href="/signin" className="text-gray-300 hover:bg-[#c29ef5] hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Sign In
            </Link>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              type="button"
              className="text-gray-300 hover:bg-[#c29ef5] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={toggleMobileMenu}
            >
              <AiOutlineMenu/>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#JumpAbout" className="text-gray-300 hover:bg-[#c29ef5] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link href="/communities" className="text-gray-300 hover:bg-[#c29ef5] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Community
              </Link>
              <Link href="/" className="disabled text-gray-300 hover:bg-[#c29ef5] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Courses
              <div>
              <ul>
                <Link href="/c" className="text-gray-300 hover:bg-[#c29ef5] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  C
                </Link>
                <Link href="/python" className="text-gray-300 hover:bg-[#c29ef5] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Python
                </Link>
                <Link href="/docker" className="text-gray-300 hover:bg-[#c29ef5] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Docker
                </Link>
              </ul>
              </div>
              </Link>

              <Link href="/signup" className="text-gray-300 hover:bg-[#c29ef5] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Sign Up
              </Link>
              <Link href="/signin" className="text-gray-300 hover:bg-[#c29ef5] hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Sign In
              </Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

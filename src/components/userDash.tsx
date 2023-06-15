import React from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import 'font-awesome/css/font-awesome.min.css';

export default function userDashboardSHEEESH() {
  return (
    <div className="h-screen justify-center items-center bg-white">
      <div id="profile" className="pb-10 bg-purple-100 flex flex-col justify-center items-center relative">
        <div className="rounded-full bg-black w-40 h-40 absolute"></div>
        <Image
          src="/images/discordLogo.svg"
          width={200}
          height={200}
          alt="ds"
          className="relative z-1"
        />
        <p className="text-2xl text-black font-bold">Nama  <a href="https://facebook.com"><i className="fa fa-share"></i></a></p>
      </div>

      <div className="h-1/2 bg-white">
        <p className="text-purple-500 text-3xl font-bold mx-10 my-10">My Courses</p>

        <div aria-label="card-overlay" className="bg-purple-200 grid grid-cols-2 mx-10 relative w-[500px] h-[200px] rounded-3xl">
          <div id="leftside" className="flex-1 flex items-center justify-center">
            <Image
              src="/images/pythonLogo.svg"
              width={150}
              height={150}
              alt="logopython"
            />
          </div>
          <div id="rightside" className="flex flex-col justify-center items-center">
            <p id="courseTitle" className="text-3xl text-black my-5">Test</p>
            <a>
              <Button>
                <p>View Course</p>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

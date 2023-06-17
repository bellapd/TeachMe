import React from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import 'font-awesome/css/font-awesome.min.css';
import { NextResponse } from 'next/server';
import { useUser } from '@clerk/nextjs';

export default function UserDashboardSHEEESH() {
  const { user } = useUser();
  const cour = user?.unsafeMetadata?.courses || {};

  return (
    <div className="h-screen justify-center items-center bg-white">
      <div id="profile" className="pb-10 bg-purple-100 flex flex-col justify-center items-center relative py-5">
        <div className="rounded-full bg-black w-40 h-40 flex items-center justify-center py-5">
          <img src={user?.profileImageUrl} className="rounded-full w-40 h-40" alt="Profile Image" />
        </div>
        <p className="text-2xl text-black font-bold">
          {user?.firstName} <a href="https://facebook.com"><i className="fa fa-share"></i></a>
        </p>
      </div>
      <div className="h-1/2 bg-white flex flex-wrap overflow-x-auto py-24">
        <p className="text-purple-500 text-3xl font-bold mx-10 my-10">My Courses</p>
        {Object.keys(cour).length === 0 ? (
          <p className="py-11 text-2xl text-gray-500">You are not taking any course right now</p>
        ) : (
          <div className="flex grid grid-cols-3 gap-5">
            {Object.entries(cour).map(([courseName, courseDetails]) => (
              <React.Fragment key={courseName}>
                {courseDetails.map((courseInstance, index) => (
                  <div
                    key={`${courseName}-${index}`}
                    aria-label="card-overlay"
                    className="bg-purple-200 w-[calc(100vw / 4)] h-[200px] rounded-3xl flex-shrink-0 mx-5 mb-5 flex"
                  >
                    <div className="flex-1 flex items-center justify-center">
                      <Image src={`/images/${courseName}.svg`} width={150} height={150} alt={courseName} />
                    </div>
                    <div className="flex flex-col justify-center items-center p-5">
                      <p className="text-3xl text-black mb-5">{courseInstance[3]}</p>
                      <p>{courseInstance[0]}</p>
                      <p>{courseInstance[1]}</p>
                      <p>{courseInstance[2]}</p>
                      <a href="/profiledetails">
                        <Button>
                          <p>View Course</p>
                        </Button>
                      </a>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

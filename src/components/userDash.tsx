import React from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import "font-awesome/css/font-awesome.min.css";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

export default function UserDashboardSHEEESH() {
  const { user } = useUser();
  const cour = user?.unsafeMetadata?.courses || {};

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div
        id="profile"
        className="pb-10 bg-purple-100 flex flex-col justify-center items-center relative py-5 w-full"
      >
        <div className="rounded-full bg-black w-40 h-40 flex items-center justify-center py-5">
          <img
            src={user?.profileImageUrl}
            className="rounded-full w-40 h-40"
            alt="Profile Image"
          />
        </div>
        <p className="text-2xl text-black font-bold">
          {user?.firstName}{" "}
          <a href="https://facebook.com">
            <i className="fa fa-share"></i>
          </a>
        </p>
      </div>
      <div className="flex justify-center">
        <p className="text-purple-500 text-3xl font-bold mx-7 my-7">
          My Courses
        </p>
      </div>
      <div className="flex flex-wrap justify-center flex-grow">
        {Object.keys(cour).length === 0 ? (
          <p className="py-11 text-3xl text-gray-500">
            You are not taking any course right now
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
            {Object.entries(cour).map(([courseName, courseDetails]) => (
              <React.Fragment key={courseName}>
                {Array.isArray(courseDetails)
                  ? courseDetails.map((courseInstance, index) => (
                      <div
                        key={`${courseName}-${index}`}
                        aria-label="card-overlay"
                        className="bg-purple-200 w-full h-[200px] rounded-3xl flex-shrink-0 mb-5 flex"
                      >
                        <div className="p-5 flex items-center justify-center h-full">
                          <Image
                            src={`/images/${courseName}.svg`}
                            width={70}
                            height={70}
                            alt={courseName}
                          />
                        </div>
                        <div className="flex flex-col justify-center items-center p-5">
                          <p className="text-purple-800 text-lg font-bold mx-2 my-2">
                            {courseInstance[3]}
                          </p>
                          <p className="text-sm">{courseInstance[0]}</p>
                          <p className="text-sm">{courseInstance[1]}</p>
                          <p className="text-sm mb-3">{courseInstance[2]}</p>
                          <a href="/profiledetails">
                            <Button className="rounded-full bg-sky-500 hover:bg-sky-700">
                            <Link
                                href={`/teacher-profile/${courseInstance[2].replace(
                                  /\s+/g,
                                  ""
                                )}`}
                              >
                                <p>View Course</p>
                              </Link>
                            </Button>
                          </a>
                        </div>
                      </div>
                    ))
                  : null}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

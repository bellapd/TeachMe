import React from "react";
import Image from "next/image";

function Howtouse() {
  return (
    <div className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <a
          href="#"
          className="bg-[#7BE6D9] text-[#4700C6] align-center text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md  mb-2"
        >
          Basic features
        </a>
        <h1 className="text-[#4700C6] text-3xl md:text-5xl font-extrabold mb-2">
          How to Use TeachMe?
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#F6F4FC] rounded-lg p-8 md:p-12">
            <Image
              src="/images/find.svg"
              width={300}
              height={300}
              alt="find mentor"
            />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Find
            </h5>
            <p className="font-normal text-gray-700">
              Specify whether you're looking for a mentor or mentee, and select
              your preferred field or subject of interest. TeachMe suggest
              suitable matches for you.
            </p>
          </div>

          <div className="bg-[#FAF1FE] rounded-lg p-8 md:p-12">
            <Image
              src="/images/meet.svg"
              width={300}
              height={300}
              alt="find mentor"
            />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Meet
            </h5>
            <p className="font-normal text-gray-700">
              TeachMe's scheduling feature makes it easy to coordinate and stay
              organized. Whether it's virtual video calls, in-person meetups, or
              a combination of both, it's up to you.
            </p>
          </div>

          <div className="bg-[#F1F3FE] rounded-lg p-8 md:p-12">
            <Image
              src="/images/study.svg"
              width={250}
              height={250}
              alt="find mentor"
            />
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Study
            </h5>
            <p className="font-normal text-gray-700">
              Follow the established learning plan, set goals, and track your
              progress. Take advantage of TeachMe's resources, such as document
              sharing, task management, and progress tracking tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Howtouse;

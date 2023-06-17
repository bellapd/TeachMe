import React from "react";
import Image from "next/image";

function Profile() {
  return (
    <div id="BagProf" className="min-h-screen">
      <section className="">
        <div
          id="Profile1"
          className="float-left bg-purple-200 p-6 w-1/5 h-screen  flex flex-col justify-center items-center text-black"
        >
          <Image
            className="rounded-full"
            src="/images/cteacher.svg"
            width={200}
            height={5}
            alt="profilepic"
          />
          <br />
          <br />
          <p
            id="ProfileName"
            className="font-serif font-bold text-3xl text-center capitalize text-purple-800"
          >
            Frans
          </p>
          <br />
          <div className=" inline-block">
            <img
              src="/images/lokasi.svg"
              className=" inline-block"
              width={17}
              height={24}
            ></img>
            <p className=" inline-block"> &nbsp; Dutch</p>
          </div>
          <div className=" inline-block">
            <br />
            <img
              src="/images/message.svg"
              className=" inline-block"
              width={17}
              height={24}
            ></img>
            <p className=" inline-block"> &nbsp; English, Dutch, German</p>
          </div>
          <div className=" inline-block">
            <img
              src="/images/edu.svg"
              className=" inline-block"
              width={17}
              height={24}
            ></img>
            <p className=" inline-block"> &nbsp; NTU, Taiwan</p>
          </div>
          <br />
          <br />
          <button className="rounded-full px-10 py-4 mx-2  bg-green-500 text-white font-semibold">
            Connect
          </button>
        </div>
        <article
          id="Profile2"
          className="float-left bg-white p-6 w-4/5 h-screen text-black overflow-y-auto"
        >
          <h1 className="align-top  text-left font-bold text-2xl">
            About me 👤
          </h1>
          <br />

          <h3 className="font-bold text-left font-sans ">
            C programmer with 99 years of experience
          </h3>
          <hr className="border-6  border-black" />
          <br />
          <p className=" font-sans text-mg">
            I have studied C for the longest time. I have also used it in almost
            all of my projects, be it a huge collaborative project with a big
            company or a personal side hustle. This means I have a wide
            understanding of how to use Python to its fullest.
          </p>

          <br />

          <p className="align-top  text-left font-bold text-2xl">Syllabus 📖</p>
          <br />
          <div className=" px-6">
            <ul className="list-disc font-sans font-semibold ">
              <p className="font-sans text-mg font-semibold">
                Module 1: Introduction to C Programming and Environment Setup
              </p>
              <li>Course Introduction and Objectives</li>
              <li>Overview of the C programming language</li>
              <li>
                Setting up a C development environment (compiler, IDE, and text
                editor)
              </li>
              <li>Writing and running your first C program</li>
              <br />
              <p className="font-sans text-mg font-semibold">
                Module 2: Basic Syntax and Data Types
              </p>
              <li>C syntax and structure</li>
              <li>Variables and data types (int, float, char)</li>
              <li>Constants and literals</li>
              <li>Input and output operations (printf and scanf)</li>
              <br />
              <p className="font-sans text-mg font-semibold">
                Module 3: Control Structures
              </p>
              <li>
                Decision-making with if, if-else, and nested if statements
              </li>
              <li>Looping structures: while, do-while, and for loops</li>
              <li>Switch case statements</li>
              <li>Break and continue statements</li>
              <br />

              <p className="font-sans text-mg font-semibold">
                Module 4: Pointers
              </p>
              <li>Pointer declaration and initialization</li>
              <li>Pointer and arrays</li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Profile;

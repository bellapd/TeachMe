import React from "react";
import Image from "next/image";
import Link from "next/link";

function Profile() {
  return (
    <div id="BagProf" className="min-h-screen">
      <section className="">
        <div
          id="Profile1"
          className="float-left bg-purple-200 p-6 w-full md:w-1/5 h-auto md:h-screen flex flex-col justify-center items-center text-black"
        >
          <Image
            className="rounded-full"
            src="/images/python2.svg"
            width={240}
            height={240}
            alt="profilepic"
          />
          <br />
          <br />
          <p
            id="ProfileName"
            className="font-serif font-bold text-3xl text-center capitalize text-purple-800"
          >
            Queenie
          </p>
          <br />
          <div className="inline-block">
            <Image
              src="/images/lokasi.svg"
              className="inline-block"
              width={17}
              height={24}
              alt="location"
            />
            <p className="inline-block">&nbsp; Scotland</p>
          </div>
          <br />
          <div className="inline-block">
            <Image
              src="/images/message.svg"
              className="inline-block"
              width={17}
              height={24}
              alt="message"
            />
            <p className="inline-block">&nbsp; English, Scottish</p>
          </div>
          <div className="inline-block">
            <Image
              src="/images/edu.svg"
              className="inline-block"
              width={17}
              height={24}
              alt="edu"
            />
            <p className="inline-block">&nbsp; NYCU, Taiwan</p>
          </div>
          <br />
          <br />
          <button className="rounded-full px-10 py-4 mx-2 bg-green-500 text-white font-semibold hover:bg-green-700 hover:scale-105 transform transition duration-300">
            <Link href="https://meet.google.com/uea-qnzp-ibi" target="_blank">
              Connect
            </Link>
          </button>
        </div>
        <article
          id="Profile2"
          className="float-left bg-white p-6 w-full md:w-4/5 h-auto md:h-screen text-black overflow-y-auto"
        >
          <h1 className="align-top text-left font-bold text-2xl">
            About me 👤
          </h1>
          <br />

          <h3 className="font-bold text-left font-sans">
            Python programmer with 99 years of experience
          </h3>
          <hr className="border-6 border-black" />
          <br />
          <p className="font-sans text-mg">
            I have studied Python for the longest time. I have also used it in
            almost all of my projects, be it a huge collaborative project with a
            big company or a personal side hustle. This means I have a wide
            understanding of how to use Python to its fullest.
          </p>

          <br />

          <p className="align-top text-left font-bold text-2xl">Syllabus 📖</p>
          <br />
          <div className="px-6">
            <ul className="list-disc font-sans font-semibold">
              <p className="font-sans text-mg font-semibold">
                Module 1: Introduction to Python
              </p>
              <li>Installation and setup</li>
              <li>Basic syntax and variables</li>
              <li>Input and output operations</li>
              <br />
              <p className="font-sans text-mg font-semibold">
                Module 2: Control Flow and Looping
              </p>
              <li>Conditional statements</li>
              <li>Looping structures</li>
              <li>Logical operators</li>
              <br />
              <p className="font-sans text-mg font-semibold">
                Module 3: Data Structures
              </p>
              <li>Lists</li>
              <li>Tuples</li>
              <li>Dictionaries</li>
              <li>String manipulation</li>
              <br />

              <p className="font-sans text-mg font-semibold">
                Module 4: File Handling
              </p>
              <li>Reading and writing files</li>
              <li>Error handling</li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Profile;

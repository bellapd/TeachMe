import Image from "next/image";
import Link from "next/link";

function Profile() {
  return (
    <div id="BagProf" className="min-h-screen">
      <section className="flex flex-col md:flex-row">
        <div className="bg-purple-200 p-6 w-full md:w-1/5 h-auto md:h-screen flex flex-col justify-center items-center text-black">
          <Image
            className="rounded-full"
            src="/images/c2.svg"
            width={200}
            height={200}
            alt="profilepic"
          />
          <br />
          <br />
          <p className="font-serif font-bold text-3xl text-center capitalize text-purple-800">
            Philip Aleon
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
            <p className="inline-block"> &nbsp; Afganistan</p>
          </div>
          <div className="inline-block">
            <br />
            <Image
              src="/images/message.svg"
              className="inline-block"
              width={17}
              height={24}
              alt="message"
            />
            <p className="inline-block"> &nbsp; English, Persian</p>
          </div>
          <div className="inline-block">
            <Image
              src="/images/edu.svg"
              className="inline-block"
              width={17}
              height={24}
              alt="edu"
            />
            <p className="mb-8 inline-block"> &nbsp; UC Davis</p>
          </div>
          <button className="rounded-full px-10 py-4 mx-2 bg-green-500 text-white font-semibold hover:bg-green-700 hover:scale-105 transform transition duration-300">
            <Link href="https://meet.google.com/uea-qnzp-ibi" target="_blank">
              Connect
            </Link>
          </button>
        </div>
        <article className="bg-white p-6 w-full md:w-4/5 h-auto md:h-screen text-black overflow-y-auto">
          <h1 className="align-top mb-8 text-left font-bold text-2xl">
            About me 👤
          </h1>
          <h3 className="font-bold text-left font-sans">
            C programmer with 10 years of experience
          </h3>
          <hr className="border-6 mb-8 border-black" />
          <p className="mb-8 font-sans text-mg">
            I have studied C for the longest time. I have also used it in almost
            all of my projects, be it a huge collaborative project with a big
            company or a personal side hustle. This means I have a wide
            understanding of how to use C to its fullest.
          </p>
          <p className="align-top mb-8 text-left font-bold text-2xl">Syllabus 📖</p>
          <div className="px-6">
            <ul className="list-disc font-sans font-semibold">
              <p className="font-sans text-mg font-semibold">
                Module 1: Introduction to C Programming and Environment Setup
              </p>
              <li>Course Introduction and Objectives</li>
              <li>Overview of the C programming language</li>
              <li>Setting up a C development environment (compiler, IDE, and text editor)</li>
              <li>Writing and running your first C program</li>

              <p className="mt-5 font-sans text-mg font-semibold">
                Module 2: Basic Syntax and Data Types
              </p>
              <li>C syntax and structure</li>
              <li>Variables and data types (int, float, char)</li>
              <li>Constants and literals</li>
              <li>Input and output operations (printf and scanf)</li>

              <p className="mt-5 font-sans text-mg font-semibold">
                Module 3: Control Structures
              </p>
              <li>Decision-making with if, if-else, and nested if statements</li>
              <li>Looping structures: while, do-while, and for loops</li>
              <li>Switch case statements</li>
              <li>Break and continue statements</li>

              <p className="mt-5 font-sans text-mg font-semibold">
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

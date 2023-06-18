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
            src="/images/docker3.svg"
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
            Agus
          </p>
          <br />
          <div className=" inline-block">
            <Image
              src="/images/lokasi.svg"
              className=" inline-block"
              width={17}
              height={24}
              alt="location"
            ></Image>
            <p className=" inline-block"> &nbsp; Indonesia</p>
          </div>
          <div className=" inline-block">
            <br />
            <Image
              src="/images/message.svg"
              className=" inline-block"
              width={17}
              height={24}
              alt="message"
            ></Image>
            <p className=" inline-block"> &nbsp; English, Sundanese</p>
          </div>
          <div className=" inline-block">
            <Image
              src="/images/edu.svg"
              className=" inline-block"
              width={17}
              height={24}
              alt="edu"
            ></Image>
            <p className=" inline-block">
              {" "}
              &nbsp; Institute of Technology, Bandung
            </p>
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
          <h1 className="align-top  text-left font-bold text-2xl">
            About me 👤
          </h1>
          <br />

          <h3 className="font-bold text-left font-sans ">
            Docker programmer with 99 years of experience
          </h3>
          <hr className="border-6  border-black" />
          <br />
          <p className=" font-sans text-mg">
            I have studied Docker for the longest time. I have also used it in
            almost all of my projects, be it a huge collaborative project with a
            big company or a personal side hustle. This means I have a wide
            understanding of how to use Docker to its fullest.
          </p>

          <br />

          <p className="align-top  text-left font-bold text-2xl">Syllabus 📖</p>
          <br />
          <div className=" px-6">
            <ul className="list-disc font-sans font-semibold ">
              <p className="font-sans text-mg font-semibold">
                Module 1: Introduction to Docker
              </p>
              <li>Overview of containerization and its benefits</li>
              <li>Understanding Docker architecture and components</li>
              <li>Installing Docker on Windows and Linux</li>
              <li>Running your first Docker container</li>
              <br />
              <p className="font-sans text-mg font-semibold">
                Module 2: Creating Docker Images
              </p>
              <li>Building Docker images from Dockerfiles</li>
              <li>Understanding Dockerfile instructions and best practices</li>
              <li>Managing image versions and repositories</li>
              <li>Using Docker registries and Docker Hub</li>
              <br />
              <p className="font-sans text-mg font-semibold">
                Module 3:Docker Networking and Volumes
              </p>
              <li>Networking concepts in Docker</li>
              <li>Configuring container networking and exposing ports</li>
              <li>Working with Docker volumes and persistent data</li>
              <li>Docker networking models and best practices</li>
              <br />

              <p className="font-sans text-mg font-semibold">
                Module 4: Docker Compose and Orchestration
              </p>
              <li>Defining multi-container applications with Docker Compose</li>
              <li>Overview of container orchestration tools (Kubernetes)</li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Profile;

import React from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import "font-awesome/css/font-awesome.min.css";
import { text } from "stream/consumers";
import { animate, motion } from "framer-motion";
<script src="https://kit.fontawesome.com/a076d05399.js"></script>;

export default function CardComponentSHEESH() {
  return (
    <div className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <h1 className="text-[#4700C6] text-3xl md:text-5xl font-extrabold mb-2">
          COMMUNITIES
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: {
                opacity: 1,
                transition: { duration: 1.5, delay: 0.1, bounce: 0.5 },
                x: 0,
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-[#F6F4FC] rounded-lg p-8 md:p-12 items-center justify-center text-center">
              <Image
                src="/images/dockerLogo.svg"
                width={300}
                height={300}
                alt="find mentor"
              />
              <div className="h-64">
                <p className="font-normal text-gray-700 my-5 text-2xl">
                  Learn how to set up your Docker environment and start
                  containerizing your applications. Choose a language below to
                  get started.
                </p>
              </div>
              <div>
                <h5 className="my-5 text-2xl font-bold tracking-tight text-gray-900">
                  Docker
                </h5>
                <a href="https://discord.gg/QyJebfGSGk">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { duration: 1.5, delay: 0.1, bounce: 0.5 },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.5,
                        bounce: 0.5,
                        type: "spring",
                      },
                    }}
                  >
                    <Button>
                      <div className="flex text-center justify-center items-center">
                        <Image
                          src="/images/discordLogo.svg"
                          width={30}
                          height={30}
                          alt="ds"
                        />
                        <p className="center">JOIN</p>
                      </div>
                    </Button>
                  </motion.div>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: {
                opacity: 1,
                transition: { duration: 1.5, delay: 0.1, bounce: 0.5 },
                y: 0,
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-[#F6F4FC] rounded-lg p-8 md:p-12 items-center justify-center text-center">
              <Image
                src="/images/c.svg"
                width={300}
                height={300}
                alt="find mentor"
              />

              <div className="h-64">
                <p className="font-normal text-gray-700 my-5 text-2xl">
                  The list of C language-learning resource include interactive
                  courses, the best C++ tutorials.
                </p>
              </div>
              <div>
                <h5 className="my-5 text-2xl font-bold tracking-tight text-gray-900">
                  C
                </h5>
                <a href="https://discord.gg/ymq5DR5m7d">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { duration: 1.5, delay: 0.1, bounce: 0.5 },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.5,
                        bounce: 0.5,
                        type: "spring",
                      },
                    }}
                  >
                    <Button>
                      <div className="flex text-center justify-center items-center">
                        <Image
                          src="/images/discordLogo.svg"
                          width={30}
                          height={30}
                          alt="ds"
                        />
                        <p className="center">JOIN</p>
                      </div>
                    </Button>
                  </motion.div>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: {
                opacity: 1,
                transition: { duration: 1.5, delay: 0.1, bounce: 0.5 },
                x: 0,
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <div className="bg-[#F6F4FC] rounded-lg p-8 md:p-12 items-center justify-center text-center">
              <Image
                src="/images/python.svg"
                width={300}
                height={300}
                alt="find mentor"
              />

              <div className="h-64">
                <p className="font-normal text-gray-700 my-5 text-2xl">
                  This is the place where Python Engineers level up their
                  knowledge, skills, and network. Exchange technical
                  publications, coding tutorials.
                </p>
              </div>
              <div>
                <h5 className="my-5 text-2xl font-bold tracking-tight text-gray-900">
                  Python
                </h5>
                <a href="https://discord.gg/zvFxv7kZtP">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { duration: 1.5, delay: 0.1, bounce: 0.5 },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.5,
                        bounce: 0.5,
                        type: "spring",
                      },
                    }}
                  >
                    <Button>
                      <div className="flex text-center justify-center items-center">
                        <Image
                          src="/images/discordLogo.svg"
                          width={30}
                          height={30}
                          alt="ds"
                        />
                        <p className="center">JOIN</p>
                      </div>
                    </Button>
                  </motion.div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>

    /* <div className="h-screen bg-white">
    <div>
        <p className="text-black text-5xl font-bold px-10 py-10">COMMUNITIES</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
        <div aria-label="card-overlay" className="mx-10 my-5 relative w-[33%] h-[72%] bg-purple-200 text-center">
            <div className="flex justify-center items-center">
                <Image
                    src="/images/dockerLogo.png"
                    alt="dockerLogo"
                    width={300}
                    height={300}
                    className="relative z-1"
                />
            </div>
            <p className="text-black mx-5 my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem molestias tempore rem esse inventore, quidem laboriosam aperiam dolores, blanditiis, quam sequi eaque! Quia laboriosam architecto ducimus delectus a commodi id?</p>
            <p className="text-black mx-2 my-3 font-bold">DOCKER</p>
            <Button className="bg-purple-500 h-10 my-3">
                <div className="flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        >
                        <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                    </svg>
                    <p>Join</p>
                </div>
            </Button>
        </div>



        <div aria-label="card-overlay" className=" mx-10 my-5 relative w-[33%] h-[70%]">
        <img
            src="https://bit.ly/3zzCTUT"
            alt=""
            className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute flex flex-col p-2 bg-white rounded bottom-5 left-5 right-5 gap-y-1">
            <h3 className="text-base font-bold">Maria</h3>
            <span className="text-sm text-gray-400">24 years old</span>
        </div>
        </div>
        <div aria-label="card-overlay" className=" mx-10 my-5 relative w-[33%] h-[70%]">
        <img
            src="https://bit.ly/3zzCTUT"
            alt=""
            className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute flex flex-col p-2 bg-white rounded bottom-5 left-5 right-5 gap-y-1">
            <h3 className="text-base font-bold">Maria</h3>
            <span className="text-sm text-gray-400">24 years old</span>
        </div>
        </div>
    </div>
</div> */
  );
}

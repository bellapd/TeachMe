import React from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import "font-awesome/css/font-awesome.min.css";
import { animate, motion } from "framer-motion";

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
  );
}

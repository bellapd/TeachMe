import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// Edited Framers Motion

function About() {
  return (
    <div>
      <section id="JumpAbout" className="bg-[#F0EFFF]">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1, delay: 0.1 },
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
            >
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12">
                <a
                  href="#"
                  className="bg-[#7BE6D9] text-[#4700C6] text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md"
                >
                  Know Us!
                </a>
                <h2 className="text-[#4700C6] text-3xl font-extrabold mb-2">
                  What is TeachMe?
                </h2>
                <p className="text-lg font-normal text-gray-500 mb-4">
                  TeachMe is a mentor-mentee finder app that helps connect
                  people seeking mentorship with experienced professionals in
                  their field of interest. The app allows users to create
                  profiles and search for mentors or mentees based on various
                  criteria.
                </p>

                <motion.a
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.5 },
                  }}
                  href="#"
                  className="inline-flex justify-center items-center mt-4 py-3 px-5 text-base font-medium text-center text-[#4700C6] rounded-xl bg-[#FFE873]"
                >
                  Join TeachMe as a Mentor
                  <svg
                    aria-hidden="true"
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1, delay: 0.1 },
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
            >
              <div>
                <Image
                  src="/images/about.svg"
                  width={500}
                  height={500}
                  alt="about"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

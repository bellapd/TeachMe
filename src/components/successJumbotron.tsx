import React from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import 'font-awesome/css/font-awesome.min.css';

export default function successJumbo() {
  return (
    <div id="Success-jumbo" className="h-screen bg-white">
      <div className="grid grid-cols-2 bg-transparent h-full">
          <div id="leftside" className="bg-white flex-1 flex items-center justify-center">
            <div className="relative w-90 h-90">
              <div className="absolute top-0 left-0 z-0 w-full h-full bg-purple-300 rounded-full"></div>
              <Image
                src="/images/appointmentsuccess.svg"
                alt="Success"
                width={600}
                height={600}
                className="relative z-1"
              />
            </div>
          </div>
          <div id = "rightside" className="bg-white flex-1 flex items-center justify-center text-left">
              <div className="text-left">
                  <p className="font-bold text-4xl text-green-500 my-2">Appointment Successful !</p>
                  <p className="text-2xl text-black font-thin my-2">Your mentor will reach out shortly.</p>
                  <p className="bold text-2xl text-black my-2">Please check your e-mail</p>
              <div className="mx-20 my-5">
              <a href="/">
                <Button className=" -mx-2 my-5 group relative h-16 w-54 overflow-hidden rounded-lg bg-white text-lg shadow">
                  <div className="absolute inset-0 w-3 bg-green-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-black group-hover:text-white">I Understand <i className="fa fa-thumbs-o-up" aria-hidden="true"></i></span>
                </Button>
              </a>
              <div className="my-2 -mx-5">
                <a href="#" className="text-2xl hover:underline ">
                    <i className=" text-2xl fa fa-facebook text-blue-600 font-bold hover:underline">      Share on Facebook</i>
                  </a>
              </div>
              <div className="my-2 -mx-6">
                  <a href="#" className="text-2xl font-bold hover:underline">
                    <i className="fa fa-twitter text-blue-400 font-bold hover:underline " aria-hidden="true">         Tweet on Twitter</i>
                </a>
              </div>
              </div>

              </div>
          </div>

      </div>
    </div>
  );
}

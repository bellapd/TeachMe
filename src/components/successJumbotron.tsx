import React from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export default function successJumbo() {
  return (
    <div id="Success-jumbo">
      <div className="grid grid-cols-2 gap-4 bg-transparent">

          <div id="leftside" className="bg-purple-300">
            <Image
              src="/images/appointmentsuccess.svg"
              alt="Success"
              width={400}
              height={400}
              bg-color="#FBECFF"
            />
          </div>
          <div id = "rightside">

              <div>
                <div className="text-green-400">
                  <p class="">Appointment Successful!</p>
                </div>
                <p>Your mentor will reach out shortly.</p>
                <p className="bold">Please Check your Email</p>
              </div>

              {/* Button I UNDERSTAND */}
              <Button>
                <h1>I understand</h1>
              </Button>

              <div>
                <a href="#">
                  <p className="fa fa-facebook" color="white">Share to Facebook</p>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                  <p>Tweet on Twitter</p>
                </a>
              </div>

          </div>
      </div>
    </div>
  );
}

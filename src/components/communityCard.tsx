import React from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import 'font-awesome/css/font-awesome.min.css';


export default function CardComponentSHEESH() {
  return (
<div className="h-screen bg-white">
    <div>
        <p className="text-black text-5xl font-bold px-10 py-10">COMMUNITIES</p>
    </div>

    <div className="h-screen bg-white flex fit">
        <div aria-label="card-overlay" className="mx-10 my-5 relative w-[33%] h-[70%] bg-green-200">
            <Image
                src="/images/dockerLogo.png"
                alt="dockerLogo"
                width={600}
                height={600}
                
                className="relative z-1"
            />


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
</div>

  );
}

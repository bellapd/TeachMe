import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

function Appointment(){
    return(
        <div id="BagProf" className="min-h-screen">
            <section className="">
                <div
                id="Profile1"
                className="float-left bg-purple-200 p-6 w-1/5 h-screen  flex flex-col justify-center items-center text-black"
                >
                    <Typography className="flex text-center py-10">
                        You are going to schedule a meeting with the following mentor
                    </Typography>
                    <Image
                        className="rounded-none"
                        src="/images/picprofile.svg"
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
                        Budi Sumaker
                    </p>
                    
                    <div className=" inline-block">
                        <p className=" inline-block"> &nbsp; Python</p>
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
                    SCHEDULE A MEETING
                </h1>
                <br />
                <br />
                
                <br />

                
                <br />
          <div className="w-72">
            <p className="align-top text-left font-bold text-2xl">Syllabus 📖</p>
            <select data-te-select-init>
                
                <option value="1">10:00</option>
                <option value="2">11:00</option>
                <option value="3">12:00</option>
                <option value="4">13:00</option>
                <option value="5">Five</option>
                <option value="6">Six</option>
                <option value="7">Seven</option>
                <option value="8">Eight</option>
            </select>
            
          </div>
                </article>
            </section>
            </div>
    );
}

export default Appointment;
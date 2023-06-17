import React, { useState, Fragment } from "react";
import Image from "next/image";
import { Typography, Checkbox, Button } from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { text } from "stream/consumers";
import emailjs from "emailjs-com";
import { useUser } from "@clerk/nextjs";
import { data } from "autoprefixer";
import { NextResponse } from "next/server";
import "font-awesome/css/font-awesome.min.css";
import Link from "next/link";

// PUBLIC KEY
emailjs.init("sMnDmOrgDr6X1RvYG");

// function sendEmail() {
//     try {
//       const templateParams = {
//         // Define the email template parameters
//         to_name: "Test",
//         from_name: "TeachMe",
//       };

//       // Send the email using the email template ID
//       const response = emailjs.send(
//         process.env.EMAILJS_SERVICE_ID,
//         process.env.EMAILJS_TEMPLATE_ID,
//         templateParams,
//         process.env.EMAILJS_USER_ID
//       );
//       console.log("Email sent successfully!", response);
//     } catch (error) {
//       console.error("Error sending email:", error);
//     }
//   }

function Appointment() {
  const { user } = useUser();

  const updateMetadata = async () => {
    // const data = {courses:['pysdsd',"doc", "ok"]};
    // const fileName = "/images/" + user?.unsafeMetadata?.courses[0] +".svg";
    const cour = user?.unsafeMetadata?.courses;
    const cour2 = cour.concat("FUCKYOPu");
    const data = { courses: cour2 };

    try {
      const response = await user?.update({
        unsafeMetadata: data,
      });
      if (response) {
        console.log("res", response);
        // console.log(myarr)
      }
    } catch (err) {
      console.error("error", err);
    }
  };

  const templateParams = {
    to_name: user?.firstName,
    from_name: "TeachMe",
    email: user?.primaryEmailAddress?.emailAddress,
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // INI EDIT
    emailjs
      .send(
        "service_3m16hip",
        "template_73tx6bx",
        templateParams,
        "sMnDmOrgDr6X1RvYG"
      )
      //INI EDIT
      .then((result) => {
        console.log(result.text);
        console.log(user?.firstName);
        console.log(user?.primaryEmailAddress?.emailAddress);
      })
      .catch((error) => {
        console.log(error);
        console.log(user?.firstName);
        console.log(user?.primaryEmailAddress?.emailAddress);
      });
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
    setShowPrompt(false); // Hide the prompt when the checkbox is checked
  };

  const [appointmentMade, setAppointmentMade] = useState(false);

  const handleMakeAppointment = () => {
    if (!appointmentMade) {
      // Perform the desired action upon making the appointment
      console.log("Appointment made!");
      // Update the state to prevent further clicks
      setAppointmentMade(true);
    }
  };

  const [text, setText] = useState("");

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  return (
    <div id="BagProf" className="min-h-screen">
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
          Budi Suumaker
        </p>

        <div className=" inline-block">
          <p className=" inline-block"> &nbsp; Python</p>
        </div>
        <br />
        <br />
      </div>
      <article
        id="Profile2"
        className="flex-col items-center bg-white p-6 w-4/5 h-screen text-black overflow-y-auto"
      >
        <h1 className="flex text-center align-top font-bold text-2xl px-5">
          SCHEDULE A MEETING
        </h1>

        <br />

        <br />
        <div className="w-72 px-5">
          <p className="text-left font-bold text-2xl ">Time</p>
          <select data-te-select-init>
            <option value="1">6:00</option>
            <option value="2">7:00</option>
            <option value="3">8:00</option>
            <option value="4">9:00</option>
            <option value="5">10:00</option>
            <option value="6">11:00</option>
            <option value="7">12:00</option>
            <option value="8">13:00</option>
            <option value="9">14:00</option>
            <option value="10">15:00</option>
            <option value="11">16:00</option>
            <option value="12">17:00</option>
            <option value="13">18:00</option>
          </select>
        </div>
        <Typography className="align-top text-left font-bold text-2xl px-5">
          Date
        </Typography>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="px-5"
        />
        <div className="my-5">
          <p>Note</p>
          <textarea
            placeholder="testing"
            value={text}
            onChange={handleChangeText}
            className="w-full h-full p-2 border border-gray-300 rounded"
          />
        </div>
        <p>Value: {text} </p>
        <div className="flex items-center mx-5 my-5">
          <Fragment>
            <Checkbox
              id="ripple-on"
              label="I am sure the information is correct"
              ripple={true}
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
            />
          </Fragment>
          {showPrompt && (
            <Typography className="text-red-500 mt-2">
              Please check the checkbox before making an appointment.
            </Typography>
          )}
        </div>
        <div className="flex-col items-center px-56">
          <Link
            href="#"
            className={`inline-flex justify-center items-center mt-4 py-3 px-5 text-base font-large text-center bg-[#FFE873] text-[#4700C6] rounded-xl`}
            onClick={handleMakeAppointment}
          >
            <Button
              variant="text"
              className="flex items-center gap-2 text-center"
            >
              Make an Appointment
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default Appointment;

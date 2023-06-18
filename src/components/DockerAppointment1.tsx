import React, { useState, Fragment } from "react";
import Image from "next/image";
import { Typography, Checkbox, Button } from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from 'emailjs-com';
import { useUser } from '@clerk/nextjs';
import Link from "next/link";

// PUBLIC KEY
emailjs.init('sMnDmOrgDr6X1RvYG')

var coursename = "Docker";
var MentorName ="Croy Isanba Karz"
var targetEmail ="fernando.mikael.stww@gmail.com"

function Appointment() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("9:00");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const { user } = useUser();

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value); // Update selected time
  };

  const getFormattedDate = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1; // Adding 1 since getMonth() returns zero-based month index
    const day = selectedDate.getDate();
    return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
  };

  const updateMetadata = async () => {
    const cour = user?.unsafeMetadata?.courses;
    console.log('res', cour);
    if (cour === undefined) {
      const data = { courses: { "docker": [[getFormattedDate(), selectedTime, "Croy Karz", "docker"]] } };
      console.log("data", data);
      try {
        const response = await user?.update({
          unsafeMetadata: data
        });
        if (response) {
          console.log('res', response)
          // console.log(myarr)
        }
      } catch (err) {
        console.error('error', err)
      }
    }
    else if (cour !== undefined && cour?.docker === undefined) {
      const course = { "docker": [[getFormattedDate(), selectedTime, "Croy Karz", "docker"]] };
      const cour2 = { ...cour, ...course };
      const data = { courses: cour2 };
      try {
        const response = await user?.update({
          unsafeMetadata: data
        });
        if (response) {
          console.log('res', response)
          // console.log(myarr)
        }
      } catch (err) {
        console.error('error', err)
      }
    }
    else {
      const course = [[getFormattedDate(), selectedTime, "Croy Karz", "docker"]];
      const cour2 = user?.unsafeMetadata?.courses?.docker?.concat(course);
      const newData = { ...user.unsafeMetadata.courses, ...{ "docker": cour2 } };

      try {
        const response = await user?.update({
          unsafeMetadata: { courses: newData }
        });
        if (response) {
          console.log('res', response)
          // console.log(myarr)
        }
      } catch (err) {
        console.error('error', err)
      }
    }
  };
  const [text,setText] = useState("");

  const handleChangeText = (event) =>{
    const text = setText(event.target.value);
  
  };
  
  const templateParams = {
    to_name: user?.firstName,
    from_name: "TeachMe",
    email: user?.primaryEmailAddress?.emailAddress
  };
  
  const sendEmail = () => {
    // INI EDIT
    emailjs.send("service_3m16hip", "template_73tx6bx", templateParams, "sMnDmOrgDr6X1RvYG")
      //INI EDIT  
      .then((result) => {
        console.log(result.text);
        console.log(user?.firstName)
        console.log(user?.primaryEmailAddress?.emailAddress)
      })
      .catch((error) => {
        console.log(error);
        console.log(user?.firstName)
        console.log(user?.primaryEmailAddress?.emailAddress)
        });
  };  
  
  const teacherEmailParams = {
    to_name: MentorName,
    from_name: user?.firstName,
    email: targetEmail,
    date: getFormattedDate(),
    time: selectedTime,
    course: coursename,
    note : text,
  };
  
  const sendEmailTeacher = () => {
    emailjs.send(
        "service_3m16hip", //Service ID
        "template_0yqoorh", //Template ID
        teacherEmailParams, 
        "sMnDmOrgDr6X1RvYG" //User ID
    )
  };
  

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
    setShowPrompt(false); // Hide the prompt when the checkbox is checked
  };

  const handleMakeAppointment = () => {
    if (checkboxChecked) {
      // Perform the desired action upon making the appointment
      console.log("Appointment made!");
    } else {
      setShowPrompt(true);
    }
  };


    const generateTimeOptions = () => {
      const options = [];
      const startTime = 9; // 9:00 AM
      const endTime = 17; // 5:00 PM
  
      for (let hour = startTime; hour <= endTime; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          const formattedHour = hour.toString().padStart(2, "0");
          const formattedMinute = minute.toString().padStart(2, "0");
          const time = `${formattedHour}:${formattedMinute}`;
          const displayTime = `${hour}:${formattedMinute}`;
          if (hour === endTime && minute === 30) {
            break; // Skip the time "17:30"
        }
        options.push(
          <option key={time} value={time}>
            {displayTime}
          </option>
        );
      }
    }

    return options;
  };

  return (
    <div id="BagProf" className="min-h-screen">
      <div
        id="Profile1"
        className="float-left bg-purple-200 p-6 w-full md:w-1/5 h-screen  flex flex-col justify-center items-center text-black"
      >
        <Typography className="flex text-center text-lg font-semibold py-10">
          You are going to schedule a meeting with the following mentor
        </Typography>
        <Image
          className="rounded-none"
          src="/images/docker1.svg"
          width={240}
          height={240}
          alt="profilepic"
        />
        <br />
        <br />
        <p
          id="ProfileName"
          className="font-sans py-2 font-bold text-3xl text-center capitalize text-purple-800"
        >
          Croy Karz
        </p>

        <div className=" inline-block">
          <p className="mt-3 coursename inline-block font-semibold"> &nbsp; Docker</p>
        </div>
        <br />
        <br />

      </div>
      <article
        id="Profile2"
        className="flex-col items-center bg-white p-6 h-screen text-black overflow-y-auto"
      >
        <h1 className="flex text-center align-top font-bold px-5 text-4xl">
          SCHEDULE A MEETING
        </h1>
        <br />
        <br />
        <div className="w-full md:w-72 px-5  inline-block">
          <p className="text-left font-bold text-2xl inline-block "> Time </p>
          <p className=" inline-block">&nbsp;&nbsp;</p>
          <img src="/images/time.svg" className=" inline-block w-8 h-8"></img>
          <select data-te-select-init onChange={(time) => handleTimeChange(time)}>
            {generateTimeOptions()}
          </select>
        </div>
        <br />
        <br />
        <Typography className="align-top text-left font-bold text-2xl px-5 inline-block">
          Date
        </Typography>
        <div className=" inline-block">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className=" py-2 inline-block"
          />
        </div>
        <div className="my-5">
          <p>Note</p>
          <textarea
            placeholder="Input Here"
            value={text}
            onChange={handleChangeText}
            className="w-full h-20 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex-grow flex flex-col items-center justify-between">
          <div className="relative px-4 md:px-80 flex-col items-center justify-center md:mt-96">
            <Fragment>
              <p className=" inline-block">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <Checkbox
                id="ripple-on"
                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am sure the information is correct"
                ripple={true}
                checked={checkboxChecked}
                onChange={handleCheckboxChange}
              />
            </Fragment>

            {showPrompt && (
              <Typography className="text-red-500 mt-2 font-bold">
                Please check the checkbox before making an appointment.
              </Typography>
            )}
          </div>

          <div className="flex-col items-center px-80">
             <Link
              href={checkboxChecked ? "/successAppointment" : "#"}
              onClick={handleMakeAppointment}
            >
              <Button onClick={() => {
                // call sendemail
                sendEmail();
                sendEmailTeacher();
                updateMetadata();
                }} variant="text" className="rounded-full px-10 py-4 mb-4 text-center text-[#4700C6] bg-[#FFE873] hover:bg-[#4700C6] hover:text-[#FFE873] hover:scale-105 transform transition duration-300 text-sm">
                            Make an Appointment
              </Button>

            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Appointment;

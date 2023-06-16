import React, { useState, Fragment } from "react";
import Image from "next/image";
import { Typography, Checkbox, Button } from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from 'emailjs-com';
import {useUser } from '@clerk/nextjs';

// PUBLIC KEY
emailjs.init('sMnDmOrgDr6X1RvYG')

function Appointment() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const {user} = useUser();

  const updateMetadata = async () => {
    const data= {};
    const cour = user?.unsafeMetadata?.courses;
    console.log('res', cour);
    if(cour === undefined){
      const data = { courses: ["python"] };
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
    else{
      const cour = user?.unsafeMetadata?.courses;
      const cour2 = cour.concat("python");
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
    
  };

  const templateParams = {
    to_name: user?.firstName,
    from_name: "TeachMe",
    email: user?.primaryEmailAddress?.emailAddress
  };

  const sendEmail = (e) => {
    e.preventDefault();
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

  const [text,setText] = useState("");

    const handleChangeText = (event) =>{
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
          src="/images/python3.svg"
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
          Lord Bawi
        </p>

        <div className=" inline-block">
          <p className="coursename inline-block"> &nbsp; Python</p>
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
        <div className="w-72 px-5  inline-block">
          <p className="text-left font-bold text-2xl inline-block "> Time </p>
          <p className=" inline-block">&nbsp;&nbsp;</p>
          <img src="/images/time.svg " className=" inline-block  w-8 h-8"></img>
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
                <textarea placeholder="testing" value={text} onChange={handleChangeText} className="w-full h-full p-2 border border-gray-300 rounded" />
            </div>
        <div className="flex-grow flex flex-col items-center justify-between">
          <div className="relative px-80 flex-col items-center justify-center">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              
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
            <a
              href={checkboxChecked ? "/successAppointment" : "#"}
              className={`inline-flex justify-center items-center mt-4 py-3 px-5 text-base font-large text-center bg-[#FFE873] text-[#4700C6] rounded-xl`}
              onClick={handleMakeAppointment}
            >
              <Button onClick={() => {
                // sendEmail();
                updateMetadata()
                }} variant="text" className="flex items-center gap-2 text-center">
                            Make an Appointment
            </Button>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Appointment;

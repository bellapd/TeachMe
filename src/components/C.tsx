import { useState, useEffect, SetStateAction } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { useUser, useClerk } from "@clerk/clerk-react";
import Link from "next/link";

export default function Example() {
  const { user } = useUser();
  const { user: clerkUser } = useClerk();
  const [activeCard, setActiveCard] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = [
    {
      image: "/images/c1.svg",
      title: "Frans",
      subtitle: "C programmer with 99 years of experience",
      description:
        "I have studied C for the longest time. I have also used it in almost of my project, be it a huge collaborative project with big company, or personal side hustle. This mean I have a wide understanding of how to use C to its fullest.",
      link: "/appointment/frans",
    },
    {
      image: "/images/c2.svg",
      title: "Philip Aleon",
      subtitle: "C programmer with 99 years of experience",
      description:
        "I have studied C for the longest time. I have also used it in almost of my project, be it a huge collaborative project with big company, or personal side hustle. This mean I have a wide understanding of how to use C to its fullest.",
      link: "/appointment/philipaleon",
    },
    {
      image: "/images/c3.svg",
      title: "Chika",
      subtitle: "C programmer with 99 years of experience",
      description:
        "I have studied C for the longest time. I have also used it in almost of my project, be it a huge collaborative project with big company, or personal side hustle. This mean I have a wide understanding of how to use C to its fullest.",
      link: "/appointment/chika",
    },
    // Add more card objects as needed
  ];

  const handleSlideChange = (index: SetStateAction<number>) => {
    setActiveCard(index);
  };

  return (
    <div className="">
      <section className="bg-white py-5 h-1/3 md:h-1/2">
        <div className="relative h-full">
          <div className="text-black py-12 px-10 md:px-64 flex items-center">
            <Image
              src="/images/c.svg"
              width={50}
              height={40}
              alt="c_logo"
              className="object-cover"
            />
            <Typography variant="h2" color="blue-gray" className="mb-2 px-2">
              C
            </Typography>
          </div>
          <Carousel
            selectedItem={activeCard}
            onChange={handleSlideChange}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            infiniteLoop
            className="carousel-wrapper"
            renderArrowPrev={(clickHandler, hasPrev) => {
              const arrowSize = isMobile ? 24 : 100;

              return (
                <div
                  className={`${
                    hasPrev ? "absolute" : "hidden"
                  } top-0 bottom-0 left-0 flex justify-center items-center p-2 opacity-50 hover:opacity-100 cursor-pointer z-20`}
                  onClick={clickHandler}
                >
                  <Image
                    src="/images/leftArrow.svg"
                    width={arrowSize}
                    height={arrowSize}
                    alt="leftArrow"
                    className="w-8 h-8 text-white"
                  />
                </div>
              );
            }}
            renderArrowNext={(clickHandler, hasNext) => {
              const arrowSize = isMobile ? 24 : 100;

              return (
                <div
                  className={`${
                    hasNext ? "absolute" : "hidden"
                  } top-0 bottom-0 right-0 flex justify-center items-center p-2 opacity-50 hover:opacity-100 cursor-pointer z-20`}
                  onClick={clickHandler}
                >
                  <Image
                    src="/images/rightArrow.svg"
                    width={arrowSize}
                    height={arrowSize}
                    alt="rightArrow"
                    className="w-8 h-8 text-white"
                  />
                </div>
              );
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="carousel-card flex-col items-center px-5 md:px-64 "
              >
                <Card className="flex-col items-center bg-purple-200">
                  <div className="w-1/3 sm:w-auto ">
                    <Image
                      src={card.image}
                      width={50}
                      height={50}
                      alt="image"
                      className="mt-3 rounded-lg max-w-full h-auto align-middle border-none"
                    />
                  </div>
                  <CardBody className="flex">
                    <div>
                      <Typography
                        variant="h4"
                        color="blue"
                        className="uppercase mb-4"
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="mb-2"
                      >
                        {card.subtitle}
                      </Typography>
                      <Typography
                        color="gray"
                        className="font-normal px-5 md:px-32 mb-2"
                      >
                        {card.description}
                      </Typography>
                    </div>
                  </CardBody>
                  <div className="flex-col items-center">
                    <Link
                      href={user && clerkUser ? card.link : "/signin"}
                      //className="inline-flex justify-center items-center mt-4 py-3 px-5 text-base font-large text-center text-[#4700C6] rounded-xl bg-[#FFE873] hover:scale-105 transform transition duration-300 "
                    >
                      <Button
                        variant="text"
                        className="rounded-full px-5 py-4 mb-4 text-center text-[#4700C6] bg-[#FFE873] hover:bg-[#4700C6] hover:text-[#FFE873] hover:scale-105 transform transition duration-300 text-sm"
                      >
                        Make an Appointment
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
}

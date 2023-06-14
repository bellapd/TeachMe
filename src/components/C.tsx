import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function Example() {
  const [activeCard, setActiveCard] = useState(0);
  const cards = [
    {
      image:
        "/images/c1.svg",
      title: "Frans",
      subtitle: "Lyft launching cross-platform service this week",
      description:
        "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story.",
      link: "#",
    },
    {
        image:
          "/images/c2.svg",
        title: "Philip Aleon",
        subtitle: "Lyft launching cross-platform service this week",
        description:
          "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story.",
        link: "#",
      },
      {
        image:
          "/images/c3.svg",
        title: "Chika",
        subtitle: "Lyft launching cross-platform service this week",
        description:
          "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story.",
        link: "#",
      },
    // Add more card objects as needed
  ];

  const handleSlideChange = () => {
    setActiveCard;
  };

  return (
    <div className="">
      <section className="bg-white py-12 h-1/3 md:h-1/2">
        <div className="relative h-full">
          <div className="text-black py-12 px-12 flex items-center">
            <Image
                src="/images/c-plain.svg"
                width={50}
                height={50}
                alt="c_logo"
                className="object-cover"
            /> 
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 px-2"
            >
              C
            </Typography>
          </div>
          <Carousel
            selectedItem={activeCard}
            onChange={handleSlideChange}
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            className="carousel-wrapper"
          >
            {cards.map((card, index) => (
            <div key={index} className="carousel-card flex-col items-center">
              <Card className="flex-row items-center bg-purple-200">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="w-2/5 shrink-0 m-0 rounded-r-none"
                >
                  <img
                    src={card.image}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h6"
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
                  <Typography color="gray" className="font-normal mb-8">
                    {card.description}
                  </Typography>
                  <a href={card.link} className="inline-block bg-yellow-400">
                    <Button variant="text" className="flex items-center gap-2 text-center bg-yellow-400">
                      Make an Appointment
                    </Button>
                  </a>
                </CardBody>
              </Card>
            </div>
            ))}
          </Carousel>
        </div>
      </section>
      
    </div>
  );
}

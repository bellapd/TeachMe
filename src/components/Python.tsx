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
        "/images/python1.svg",
      title: "Buudi Sumaker",
      subtitle: "Lyft launching cross-platform service this week",
      description:
        "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story.",
      link: "#",
    },
    {
        image:
          "/images/python2.svg",
        title: "Queenie",
        subtitle: "Lyft launching cross-platform service this week",
        description:
          "Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Yet its own business model disruption is only part of the story.",
        link: "#",
      },
      {
        image:
          "/images/python3.svg",
        title: "Lord Bawi",
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
    <div>
      <section className="bg-white py-12 h-1/3 md:h-1/2">
        <div className="relative h-full">
            <div className="text-black py-12">
                <Image
                    src="/images/python-original.png"
                    width={50}
                    height={50}
                    alt="python_logo"
                    className="object-cover"
                /> 
                Python
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
                <div key={index} className="carousel-card">
                  <Card className="flex-row w-full max-w-[48rem]">
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
                      <a href={card.link} className="inline-block">
                        <Button variant="text" className="flex items-center gap-2">
                            Learn More
                            <ArrowLongRightIcon
                            strokeWidth={2}
                            className="w-4 h-4"
                            />
                        </Button>
                      </a>
                    </CardBody>
                  </Card>
                </div>
                ))}
            </Carousel>
            
        </div>
      </section>
      <Button variant="text" className="flex items-center gap-2">Make an Appointment</Button>
    </div>
  );
}

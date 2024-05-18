"use client";

import { CarouselSpacing } from "@/components/carousel/page";
import Image from "next/image";
import BgImage from "@/assets/img/main-iu-background.jpg";
import { Button } from "antd";
import { StyledH1, StyledParagraph } from "./styledcompnent"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="relative h-full w-full flex-1 bg-cover bg-center"
        style={{ backgroundImage: `url(${BgImage.src})` }} // Adjusted to use .src for Next.js image imports
      >
        <Button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Partner with us
        </Button>
      </div>
      <div>
        <StyledH1>Industries We Serve</StyledH1>
        <StyledParagraph>At DevExcellence, we specialize in advanced app development, leveraging the latest in AI and ML technologies. 
          We deliver innovative digital solutions across diverse industries, enhancing business operations and driving growth.</StyledParagraph>
      </div>
      <div className="w-full flex justify-center">
        <CarouselSpacing />
      </div>
    </div>
  );
}

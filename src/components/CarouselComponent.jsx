import React, { useEffect, useState } from "react";
import uploadPreview from "../assets/upload-preview.jpg";
import { Carousel } from "@mantine/carousel";
import InputImageCard from "./InputImageCard";
const CarouselComponent = ({ images }) => {
  console.log(images.length);
  const [activeImage, setActiveImage] = useState(images[0]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [fullImages, setFullImages] = useState([...images]);

  useEffect(() => {
    setFullImages((prevImages) =>
      prevImages.map((image) => {
        if (image == "") {
          image = "https://i.postimg.cc/MGNndBNX/upload-preview.jpg";
        }

        return image;
      })
    );
  }, []);

  return (
    <div className="w-full h-full">
      <div className="img-container w-full min-h-[320px] p-[15px] bg-[#F3F3F3] flex justify-center items-center rounded-2xl border border-gray-200  overflow-hidden mb-10">
        <img
          src={activeImage}
          alt="Image"
          className="w-[275px] rounded-2xl object-cover"
        />
      </div>
      <Carousel
        skipSnaps
        initialSlide={activeSlide}
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
        slidesToScroll={1}
        classNames={{ controls: "w-[118%] -translate-x-[8%]" }}
        onSlideChange={(e) => {
          setActiveImage(images[e]);
          setActiveSlide(e);
        }}
      >
        {fullImages.map((image, i) => (
          <Carousel.Slide key={i}>
            <button
              onClick={() => {

                setActiveImage(image);
                setActiveSlide(i);
              }}
            >
              <InputImageCard
                imageUrl={image}
                hidden
                active={i == activeSlide}
                hover
              />
            </button>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;

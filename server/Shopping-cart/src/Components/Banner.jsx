import React, { useRef } from "react";
import { GrNext, GrPrevious } from "react-icons/gr"; // Import icons
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  const sliderRef = useRef(null); // Create a ref for the slider

  const images = [
    "images/s1.png",
    "images/s2.png",
    "images/s3.png",
    "images/s4.png",
    "images/s5.png",
    "images/s6.png",
    "images/s7.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows (we'll use custom buttons)
    responsive: [
      { breakpoint: 768, settings: { dots: false, arrows: false } },
    ],
  };

  return (
    <div style={{width: "99%",
      paddingLeft: "10px",
      paddingRight: "10px",
      boxSizing: "border-box",
      position: "relative",
      marginBottom: "45px"}}>

      <Slider ref={sliderRef} {...settings}>
        {images.map((img, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>

      {/* Previous Button */}
      <button
        onClick={() => sliderRef.current.slickPrev()}
        style={{
          position: "absolute",
          left: "auto",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          background: "Transparent",
          color: "transparent",
          border: "None",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <GrPrevious size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={() => sliderRef.current.slickNext()}
        style={{
          position: "absolute",
          right: "auto",
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          background: "Transparent",
          color: "transparent",
          border: "none",
          borderRadius: "50%",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        <GrNext size={24} />
      </button>
    </div>
  );
};

export default Banner;

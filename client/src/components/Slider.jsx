/* eslint-disable react/jsx-key */
import office1 from "../../public/office1.jpeg";
import office2 from "../../public/office1.jpg";
import Carousel from "./Carousel.jsx";

const slides = [office1, office2];

export default function Slider() {
  return (
    <div>
      <div className="relative w-full h-[600px]">
        <Carousel>
          {slides.map((s) => (
            <img
              src={s}
              alt="Professional Image"
              className="w-full h-[600px] "
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

import React from "react";
import SliderItem from "./SliderItem";

const SliderContaner = (props) => {
  return (
    <div className="sliderConainer">
      <div className="owl-carousel owl-theme">
        {props.children}
      </div>
    </div>
  );
};

export default SliderContaner;

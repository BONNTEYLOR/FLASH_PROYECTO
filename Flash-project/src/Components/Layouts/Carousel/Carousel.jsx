import React from "react";
import { OffersImage } from "../../UI/OffersImage/OffersImage";
import "./carousel.css";

export const Carousel = () => {
  return (
    <>
      <div className="containerCarousel">
        <div className="firstCarousel">
          <OffersImage
            src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677770328/pp_ekmszg.png"
            style="images"
          />
        </div>
        <div className="secondCarousel">
          <OffersImage
            src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677770267/prin_xzjoad.png"
            style="images1"
          />
          <br/>
          <OffersImage
            src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677770326/p_jrmhdd.png"
            style="images1"
          />
        </div>
      </div>
    </>
  );
};

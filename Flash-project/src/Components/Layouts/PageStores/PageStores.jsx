import React from "react";
import { CardYou } from "../../UI/CardYou/CardYou";
import { OffersImage } from "../../UI/OffersImage/OffersImage";
import "./pageStores.css";
export const PageStores = () => {
  return (
    <>
    <div className="imageStore">
      <OffersImage style="image" src="https://res.cloudinary.com/deoe4gcly/image/upload/v1679064465/26_wu8pdr.jpg" />
      <div className="imgLogo">
      <OffersImage style="imageLogo2" src="https://res.cloudinary.com/deoe4gcly/image/upload/v1679064642/45_pjvror.png" />
      </div>
      </div>
      

      <div className="boxStores">
        <div className="youCard">
          <div className="cardYou2">
            <CardYou />
          </div>
          <div className="cardYou2">
            <CardYou />
          </div>
          <div className="cardYou2">
            <CardYou />
          </div>
          <div className="cardYou2">
            <CardYou />
          </div>
          <div className="cardYou2">
            <CardYou />
          </div>
          <div className="cardYou2">
            <CardYou />
          </div>
          <div className="cardYou2">
            <CardYou />
          </div>
          <div className="cardYou2">
            <CardYou />
          </div>
          <div className="cardYou2">
            <CardYou />
          </div>
          <div className="cardYou2">
            <CardYou />
          </div>
          <div className="cardYou2">
            <CardYou />
          </div>
          <div className="cardYou2">
            <CardYou />
          </div>
          <div className="cardYou2">
            <CardYou />
          </div>
          <div className="cardYou2">
            <CardYou />
          </div>
          <div className="cardYou2">
            <CardYou />
          </div>
          <div className="cardYou2">
            <CardYou />
          </div>
        </div>
      </div>
    </>
  );
};

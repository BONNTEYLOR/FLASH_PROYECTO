import React from "react";
import { OffersDescription } from "../OffersDescription/OffersDescription";
import { OffersImage } from "../OffersImage/OffersImage";
import { OffersNewPrice } from "../OffersNewPrice/OffersNewPrice";
import { OffersPrice } from "../OffersPrice/OffersPrice";
import { Tittle } from "../Tittle/Tittle";

export const CardOffers = ({styles}) => {
  return (
    
    <div className={styles}>
      <OffersImage
        style="imageOffers"
        src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677851897/a_orzn6x.jpg"
      />
      <div className="description">
        <Tittle
          style="textDescription"
          text="Rodillo masajeador de Jade y cuarzo rosa, juego de raspador Gouache, piedra de cristal Natural."
        />
        <div className="prices">
        <Tittle style="price" text="$15.000" />
        <Tittle style="newPrice" text="$10.000" />
        </div>
      </div>
    </div>
  );
};

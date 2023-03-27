import React from "react";
import { ImageStores } from "../../UI/ImageStores/ImageStores";
import { Tittle } from "../../UI/Tittle/Tittle";
import "./stores.css";
import {NavLink} from 'react-router-dom'
import { OffersImage } from "../../UI/OffersImage/OffersImage";

export const Stores = () => {
  return (
    <>
      <div className="containerBox">
        <div className="containerTittle">
          <Tittle text="Tiendas Oficiales" />
        </div>
        <div className="containerStores">
          <NavLink to="/StoresPage">
            <OffersImage
              style="storesImage"
              src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677849697/7_gwafs0.png"
            />
          </NavLink>
          <NavLink to="/StoresPage">
            <OffersImage
              style="storesImage"
              src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677849697/7_gwafs0.png"
            />
          </NavLink>
          <NavLink to="*">
          <OffersImage
            style="storesImage"
            src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677849128/2_vwj33h.png"
          />
          </NavLink>





          
          <OffersImage
            style="storesImage"
            src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677849461/3_grsdkc.jpg"
          />
          <OffersImage
            style="storesImage"
            src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677774590/logo_ngc0yh.png"
          />
          <OffersImage
            style="storesImage"
            src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677849609/5_ekdcj4.jpg"
          />
          <OffersImage
            style="storesImage"
            src="https://res.cloudinary.com/deoe4gcly/image/upload/v1677849507/4_mowr3w.png"
          />
        </div>
      </div>
    </>
  );
};

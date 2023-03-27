import React from 'react'
import { NavLink } from 'react-router-dom'
import { CardOffers } from '../../UI/CardOffers/CardOffers'
import { Tittle } from '../../UI/Tittle/Tittle'

import './offers.css'

export const Offers = () => {
  return (
    <>
        <div className="boxOffers">
            {/* <div className="tittleOffers">
                <Tittle style="offersTittle" text="OFERTAS TOP"/>
                    <div className="circle">
                      <div className="circle-b"></div>
                    </div>
                <span className='paylog'>
                  <div className="paylog1">
                  </div>
                </span>
                
            </div> */}
            <div className="offersTittle">
            <Tittle style="" text="OFERTAS TOP"/>
            <NavLink to="/Offers" className="link">Ver Todas</NavLink>
            </div>
            <div className="offersContainer">
                <CardOffers styles="offers"/>
                <CardOffers styles="offers"/>
                <CardOffers styles="offers"/>
                <CardOffers styles="offers"/>
                <CardOffers styles="offers"/>
            </div>
        </div>
    </>
  )
}



import React from 'react'
import { CardOffers } from '../../UI/CardOffers/CardOffers'
import { Tittle } from '../../UI/Tittle/Tittle'
import './PageOffers.css'

export const PageOffers = () => {
  return (
    <div className="containerOffers">
      <div className="tittleCard">
    <Tittle style="h2" text="OFERTAS"/>
    <Tittle style="h2 color"text="¡Disfruta de nuevas ofertas cada dia!"/>
    </div>
  <div className="boxCard">
  <div className="boxCard2">
    <CardOffers styles="cardSmall"/>
    <CardOffers styles="cardSmall"/>
    <CardOffers styles="cardSmall"/>
    <CardOffers styles="cardSmall"/>
    <CardOffers styles="cardSmall"/>
    <CardOffers styles="cardSmall"/>
    <CardOffers styles="cardSmall"/>
    <CardOffers styles="cardSmall"/>
    <CardOffers styles="cardSmall"/>
    <CardOffers styles="cardSmall"/>
    <CardOffers styles="cardSmall"/>
    <CardOffers styles="cardSmall"/>
    </div>
    </div>
    </div>
    
    
  )
}

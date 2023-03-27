import React from 'react'
import {OffersImage } from '../../UI/OffersImage/OffersImage'
import { OffersDescription } from '../../UI/OffersDescription/OffersDescription'
import {OffersPrice} from '../../UI/OffersPrice/OffersPrice'
import {Units} from '../../UI/Units/Units'
import { Tittle } from '../Tittle/Tittle'
export const CardYou = () => {
  return (
    <>
    <OffersImage style="imageYou" src="https://res.cloudinary.com/deoe4gcly/image/upload/v1679056071/111_schu0y.webp"/>
    <Tittle style="descriptionYou" text="Gorra Hombre"/>
    <Tittle style="priceYou" text="$15.000"/>
    <Tittle style="unitsYou"  text="10 Unidades"/>
    </>
  )
}

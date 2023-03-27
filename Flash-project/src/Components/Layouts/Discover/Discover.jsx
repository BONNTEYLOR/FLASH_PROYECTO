import React from 'react'
import { OffersImage } from '../../UI/OffersImage/OffersImage'
import { Tittle } from '../../UI/Tittle/Tittle'
import './discover.css'

export const Discover = () => {
  return (
    <>
    <div className="boxDiscover">
        <div className="tittleDiscover">
    <Tittle text="DESCUBRE"/>
    <hr className='hr' />
    </div>
    <div className="containerDiscover">
    <OffersImage style
    ="image1" src="https://res.cloudinary.com/deoe4gcly/image/upload/v1678109829/as_qqrgzp.png"/>
    <OffersImage style
    ="image2" src="https://res.cloudinary.com/deoe4gcly/image/upload/v1678109836/ass_gmjjqp.png"/>
    </div>
    </div>
    </>
  )
}

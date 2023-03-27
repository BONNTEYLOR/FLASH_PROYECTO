import React from 'react'
import { CardYou } from '../../UI/CardYou/CardYou'



import { Tittle } from '../../UI/Tittle/Tittle'
import './forYou.css'
export const ForYou = () => {
  return (

    <>
    <div className="box">
        <div className="tittleYou">
    <Tittle text="SOLO PARA TI"/>
    </div>
    <div className="cardYou">
        <div className="cardYou2">
    <CardYou/>
    </div>
    <div className="cardYou2">
    <CardYou/>
    </div>
    <div className="cardYou2">
    <CardYou/>
    </div>
    <div className="cardYou2">
    <CardYou/>
    </div>
    <div className="cardYou2">
    <CardYou/>
    </div>
    <div className="cardYou2">
    <CardYou/>
    </div>
    <div className="cardYou2">
    <CardYou/>
    </div>
    <div className="cardYou2">
    <CardYou/>
    </div>

    
    </div>
    </div>
    </>
  )
}

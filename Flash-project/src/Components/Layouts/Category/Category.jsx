import React from 'react'
import { CardCategory } from '../../UI/CardCategory/CardCategory'
import { Tittle } from '../../UI/Tittle/Tittle'
import './category.css'
export const Category = () => {
  return (
    <>
    <div className="boxCategory">
        <div className="tittleCategory">
    <Tittle text="CATEGORIAS"/>
    </div>
    <div className="card">
    <CardCategory/>
    <CardCategory/>
    <CardCategory/>
    <CardCategory/>
    <CardCategory/>
    <CardCategory/>
    </div>
    </div>
    </>
  )
}

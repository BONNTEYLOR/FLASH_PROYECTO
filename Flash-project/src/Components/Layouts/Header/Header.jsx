import React from 'react'
import { NavLink } from 'react-router-dom';

import { Logo } from "../../UI/Logo/Logo";
import { Search } from "../../UI/Search/Search";
import { Shopping } from '../../UI/Shopping/Shopping';
import {User} from '../../UI/User/User';
import "./Header.css"


export const Header = () => {
  return (
    <>
    <div className="containerHeader">
      
   <Logo />
   <Search />
   <Shopping />
   <NavLink className='contact' to="/ContactUs">Contactanos</NavLink>
   
   <User />
   </div>
   </>
  )
}



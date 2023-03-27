import React, {useState} from "react";
import { FaUser  } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

export  const User = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <FaUser className='userColor'  onClick={ () => setIsOpen(!isOpen)}/>
    
    
        <div className="navbar">
         
            <div className={`nav_items ${isOpen && "open"}`}>
            <h2>Bienvenid@ a Flash</h2>
            <div className="buttons">
              
                <button><NavLink to='/Login'>Iniciar Sesión</NavLink></button>
                
                <button><NavLink to='/Register'>Registrarse</NavLink></button>
                </div>
                
            </div>
        
            </div>
      
    </>
  )
}



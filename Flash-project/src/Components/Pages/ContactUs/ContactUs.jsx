import React, {useRef} from 'react'
import './contactUs.css'
import emailjs from '@emailjs/browser'
import { MdEmail} from "react-icons/Md";
import { ImLocation} from "react-icons/Im";
import { BsFillTelephoneFill,BsFacebook,BsInstagram,BsTwitter} from "react-icons/Bs"

 export const ContactUs = () =>{

    const refForm = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(refForm.current);
        const serviceId = "service_zcs60e9";
        const templadeId= "template_iivsf6s";
        const apiKey= "c5ORmDyFKFxHmi5Wt";

        emailjs.sendForm(serviceId, templadeId, refForm.current, apiKey)
        .then( result => console.log(result.text))
        .catch( error => console.error(error))
    }

  return (
    <div className="container-form">
      
      <div className="form-redes">
        <div className="form-left">
      <div className="tittle">
        <h2>Contactanos</h2>
      </div>
      </div>
      <div className="form-rigth">
      <div className="redes-sociales">
        <div className="icons">
        <MdEmail /> 
        <p>unicentrroarmenia@gmail.com</p>
        </div>
        <div className="icons">
        <ImLocation/> <p>Armenia-Quindio</p>
        </div>
        <div className="icons">
        <BsFillTelephoneFill/> <p>3182790598</p>
        </div>
        <div className="contact">
    <BsFacebook className='color'/>
    <BsInstagram className='color'/>
    <BsTwitter className='color'/>
        </div>
      </div>

    <form ref={refForm} action="" onSubmit={handleSubmit}>
  
    <input name='username' type="text" placeholder='Nombre' required/>
  
    
    <input name='email' type="email" placeholder='E-mail' id="email" required/>
    
    <textarea  maxLength="500" z placeholder='Mensaje' name="message" id="" cols="30" rows="10" ></textarea>
    
    <button className="btn-send">Enviar</button>
    </form>
    </div>
    </div>


    </div>
  
  )
  
}


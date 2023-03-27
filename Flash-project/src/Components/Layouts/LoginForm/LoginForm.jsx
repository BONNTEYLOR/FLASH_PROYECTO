import React from 'react'
import { useForm } from 'react-hook-form'
import './loginForm.css'
export const LoginForm = () => {
    const { register, handleSubmit, watch, formState: {errors} } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        console.log(data)
    }
    
    return(
        <>
            <div className="box">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="container_form">
                <h1>Iniciar Sesion</h1>
                {/* <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'></label> */}
                <input className='input_form' type="email" id="email" 
                placeholder='E-mail'
                {...register("email",{
                    pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                })}
                />
                {errors?.email?.type === "pattern" && <p
                className='text-red-500'>Please write correct email address</p>
                }
                 {/* <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'></label> */}
                <input className='input_form' type="password"
                id='password' placeholder='Contraseña' 
                {...register("password", {
                    minLength: 8,
                    required: true
                })} 
                /> 
                {errors?.password?.type === "minLength" && <p
                className='text_alert'>Su contraseña tener mas de 8 caracteres</p>}
                {errors?.password?.type === "required" && 
                <p className='text-red-500'>Password is required</p>}


          <a href="./RecoverdPassword" className="password_login">
            ¿Has olvidado tu contraseña?
          </a>
             <div className="buttons">
            <button  type="submit" >
              Iniciar Sesión
            </button>
            <div className="user">
            <p>¿No tienes una cuenta?</p>
            <a href="./register">Regìstrate</a>
            </div>
          </div>
          </div>
        </form>
                
                
                {/* <a href="./RecoverPassword">Recover Password</a>
                <p className='font-bold'>----------- or -----------</p>
                <a href="./register">Sign up</a> */}
</div>
        </>
    )
}

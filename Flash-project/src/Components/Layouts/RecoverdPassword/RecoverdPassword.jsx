import React from 'react'
import { useForm } from 'react-hook-form'

export const RecoverPasswordForm = () => {
    const { register, handleSubmit, watch, formState: {errors} } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        console.log(data)
    }
    return(
        <>
        
        <div className="box">
            <form action=""  onSubmit={handleSubmit(onSubmit)}>
                <div className="container_form">
            <h1>Recuperar Contraseña</h1>
            <input className='input_form' type="email" id='email' placeholder='E-mail' 
                {...register("email", {
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                })} 
                /> 
                {errors?.email?.type === "pattern" && <p className='text-red-500'>Please write correct email address</p>}

                <input className='input_form' type="text" id='code' placeholder='Codigo' 
                {...register("code", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                })} 
                /> 
                {errors?.password?.type === "required" && <p className='text-red-500'>Password is required</p>}
                {errors?.code?.type === "pattern" && <p className='text-red-500'>Please write correct code</p>}
                

                {/* <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'></label> */}
                <input className='input_form' type="password" id='confirmPassword' placeholder='Nueva Contraseña' 
                {...register("New Password", {
                    minLength: 8,
                    required: true
                })} 
                /> 
                
                {errors?.password?.type === "minLength" && <p className='text-red-500'>Your password must be larger then 8 characters</p>}
                {errors?.password?.type === "required" && <p className='text-red-500'>Password is required</p>}
                
                {/* <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'></label> */}
                <input className='input_form' type="password" id='confirmPassword' placeholder='Confirmar Contraseña' 
                {...register("Confirm Password", {
                    minLength: 8,
                    required: true
                })} 
                /> 
                
                {errors?.password?.type === "minLength" && <p className='text-red-500'>Your password must be larger then 8 characters</p>}
                {errors?.password?.type === "required" && <p className='text-red-500'>Password is required</p>}
            
                <div className="buttons">
            <button  type="submit" >
              Recuperar Contraseña
            </button>
            <div className="user">
            <a href="/Login">Iniciar Sesiòn</a>
            
            </div>
          </div>
              
                </div>
            </form> 
            </div>
        </>
    )
}

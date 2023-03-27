import React from 'react'
import { useForm } from 'react-hook-form'

export const RegisterForm = () => {
    const { register, handleSubmit, watch, formState: {errors} } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        console.log(data)
    }
    
    return (
        <>
       <div className="box">
            {/* <h1>Registration</h1> */}
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="container_form">
            <h1>Regìstrate</h1>
                {/* <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'></label> */}
                <input className='input_form' type="number" id='document' placeholder='Documento' 
                {...register("document", {
                    required: true,
                    maxLength: 10,
                    pattern: /^(0|[1-9][0-9]*)$/
                })} 
                /> 
                {errors?.document?.type === "required" && <p className='text-red-500'>Document is required</p>}
                {errors?.document?.type === "pattern" && <p className='text-red-500'>Numeric characters only</p>}

                {/* <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'></label> */}
                <input className='input_form'id='name' placeholder='Nombre' 
                {...register("name", {
                    pattern: /^[A-Za-z]+$/i
                })} 
                /> 
                {errors?.name?.type === "pattern" && <p className='text-red-500'>Alphabetical characters only</p>}

                {/* <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'></label> */}
                <input className='input_form' type="email" id='email' placeholder='E-mail' 
                {...register("email", {
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                })} 
                /> 
                {errors?.email?.type === "pattern" && <p className='text-red-500'>Please write correct email address</p>}

                {/* <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'></label> */}
                <input className='input_form'type="tel" id='phone' placeholder='Telefono' 
                {...register("phone", {
                    maxLength: 10,
                    pattern: /^(0|[1-9][0-9]*)$/
                })} 
                />
                {errors?.document?.type === "pattern" && <p className='text-red-500'>Numeric characters only</p>}

                {/* <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'></label> */}
                <input className='input_form' type="password" id='password' placeholder='Contraseña' 
                {...register("password", {
                    minLength: 8,
                    required: true
                })} 
                /> 
                {errors?.password?.type === "minLength" && <p className='text-red-500'>Your password must be larger then 8 characters</p>}
                {errors?.password?.type === "required" && <p className='text-red-500'>Password is required</p>}

                {/* <label className='block text-gray-700 text-sm font-bold mt-3 mb-2'></label> */}
                <input className='input_form' placeholder='Confirmar Contraseña' 
                {...register("confirmPassword", {
                    minLength: 8,
                    required: true
                })} 
                /> 
                {errors?.password?.type === "minLength" && <p className='text-red-500'>Your password must be larger then 8 characters</p>}
                {errors?.password?.type === "required" && <p className='text-red-500'>Password is required</p>}

                <div className="buttons">
            <button  type="submit" >
              Regìstrate
            </button>
            <div className="user">
            <p>¿Ya tienes una cuenta?</p>
            <a href="/Login">Iniciar Sesiòn</a>
            </div>
          </div>
                </div>
            </form>
            </div>
        </>
    )
}


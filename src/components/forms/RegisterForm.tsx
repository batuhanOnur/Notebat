import React, { useState, useEffect, } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { User } from '../../interfaces/auth';
import { useAddNewUserMutation }  from '../../features/api/authSlice'
import { Link } from 'react-router-dom'
import registerast from '../../assets/registerast.png'
import AuthNotification from '../notifications/AuthNotification'


const RegisterForm:React.FC = () => {

    const [isRegistered, setRegistered] = useState<boolean>(false)

    const { register, handleSubmit,formState: { errors }, } = useForm<User>();
    const [addNewUser , {isSuccess}] = useAddNewUserMutation()

    const onSubmit: SubmitHandler<User> = data => {
        addNewUser(data)
        .unwrap()
        .then(()=> {})
    }

    // inite-loop önlemek için
    useEffect(()=>{
        if(isSuccess){
           setRegistered(true)
        }
    },[isSuccess])

  return (
    <div>
        <div className="flex items-center flex-col">
            <div>
                <img src={registerast} alt="registerpng" className="w-48"/>
            </div>
            <div className="mt-5">
                <span className="text-white text-2xl">Register</span>
            </div>
        </div>
    <form onSubmit={handleSubmit(onSubmit)}>

        <div className="block mt-3">
            <label>
                <span className="block text-textgreen text-sm">EMAIL</span>
                <input {...register("email", { required:true})} type="email" className=" w-[100%] rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 peer ..."/>
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-xs">
                    Please provide a valid email address.
                </p>
            </label>
        </div>

        <div className="flex">
            <label className="block mt-3">
                <span className="block text-textgreen text-sm">FIRSTNAME</span>
                <input {...register("name", { required:true})} type="text" className="w-[95%] rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"/>
                <p className="mt-2 text-pink-600 text-xs">{errors.name?.type === 'required' && "First name is required"}</p>
            </label>

            <label className="block mt-3">
                <span className="block text-textgreen text-sm">LASTNAME</span>
                <input {...register("lastName", { required:true})} type="text" className="w-[100%] rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"/>
                <p className="mt-2 text-pink-600 text-xs">{errors.lastName?.type === 'required' && "First name is required"}</p>
            </label>
        </div>

        <label className="block mt-3">
            <span className="block text-textgreen text-sm">PASSWORD</span>
            <input {...register("password", { required:true})} type="password" className="w-[100%] rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"/>
            <p className="mt-2 text-pink-600 text-xs">{errors.password?.type === 'required' && "First name is required"}</p>
        </label>

        <div className="mt-5">
            <button className="bg-textgreen rounded-lg w-[100%] text-white p-2">
                REGISTER
            </button>
        </div>

        <div className="mt-4 text-center">
            <span className="text-textgrey text-xs">Already have an account? </span>
            <Link to="/login" className="text-textorange text-xs">Login</Link>
        </div>
    </form>

    
    { isRegistered && 
        <div className="absolute left-20 bottom-20">
            <AuthNotification 
                title={"Register Succesful"}
                message={"Redirect to Login Page"}
                color={"green"}
                autoClose={2000}
                navigateTo={"login"}
            />
        </div>
    }
    </div>
  )
}

export default RegisterForm
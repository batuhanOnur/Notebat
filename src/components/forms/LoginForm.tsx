import { Link } from 'react-router-dom'
import loginast from '../../assets/loginast.png'
import { useForm, SubmitHandler } from "react-hook-form";
import { Login } from '../../interfaces/auth';
import { useLoginUserMutation }  from '../../features/api/authSlice'
import { loggedIn } from '../../features/user/userSlice'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import AuthNotification from '../notifications/AuthNotification'


export const LoginForm = () => {

    const { register, handleSubmit } = useForm<Login>();
    const [ isLogin, setLogin ] = useState<boolean>(false)
    const [loginUser , {isSuccess}] = useLoginUserMutation()
    const dispatch = useDispatch()

    const onSubmit: SubmitHandler<Login> = data => {
        loginUser(data)
        .unwrap()
        .then((response)=> {
            dispatch(loggedIn(response))
        })
    }

    // inite-loop önlemek için
    useEffect(()=>{
        if(isSuccess){
            setLogin(true)
        }
    },[isSuccess])

    return(
        <div className="w-full h-full flex flex-col items-center">
            <div>
                <img src={loginast} alt="loginpng" className="w-48"/>
            </div>
            <div className="mb-8">
                <span className="text-white text-2xl">Welcome to Notebat</span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="w-[20%]">
                <label className="block w-[100%] m-[5%]">
                    <span className="block text-textgreen text-sm">EMAIL</span>
                    <input {...register("email", { required:true})} type="email" className="w-[90%] rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 peer ..."/>
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-xs">
                        Please provide a valid email address.
                    </p>
                </label>

                <label className="block mt-2 w-[100%] m-[5%]">
                    <span className="block text-textgreen text-sm">PASSWORD</span>
                    <input {...register("password", { required:true})} type="password" className="w-[90%] rounded-md p-2 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"/>
                </label>

                <div className="mt-4 text-xs text-textgrey w-[90%] m-[5%] cursor-pointer text-end">
                    <span>Forgot Password</span>
                </div>

                <div className="mt-4">
                    <button className="bg-textgreen rounded-lg w-[90%] m-[5%] text-white p-2">
                        LOGIN
                    </button>
                </div>

                <div className="mt-4 text-center">
                    <span className="text-textgrey text-xs">Don't have an account? </span>
                    <Link to="/register" className="text-textorange text-xs">Register</Link>
                </div>
            </form>

            { isLogin && 
                <AuthNotification 
                    title={"Login Succesful"}
                    message={"Redirect to Home Page"}
                    color={"green"}
                    autoClose={2000}
                    navigateTo={"boards"}
                />
            }
        </div>
    )
}
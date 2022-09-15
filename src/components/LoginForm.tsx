import { Link } from 'react-router-dom'
import loginast from '../assets/loginast.png'
import { useForm, SubmitHandler } from "react-hook-form";
import { Login } from '../interfaces/auth';
import { useLoginUserMutation }  from '../features/api/authSlice'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loggedIn } from '../features/user/userSlice'

export const LoginForm = () => {

    const { register, handleSubmit,formState: { errors }, } = useForm<Login>();
    const [loginUser , {isSuccess}] = useLoginUserMutation()
    const dispatch = useDispatch()


    const onSubmit: SubmitHandler<Login> = data => {
        loginUser(data)
        .unwrap()
        .then((resp)=> {console.log('response', resp)})
    }

    if(isSuccess){
        dispatch(loggedIn())
        return <Navigate to="/"/>
    }

    return(
        <div className="w-full h-full flex flex-col items-center">
            <div>
                <img src={loginast} alt="loginpng" className="w-48"/>
            </div>
            <div className="mb-8">
                <span className="text-white text-2xl">Welcome to Notebat</span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="block">
                    <span className="block text-textgreen text-sm">EMAIL</span>
                    <input {...register("email", { required:true})} type="email" className="rounded-md p-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 peer ..."/>
                    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-xs">
                        Please provide a valid email address.
                    </p>
                </label>

                <label className="block mt-2">
                    <span className="block text-textgreen text-sm">PASSWORD</span>
                    <input {...register("password", { required:true})} type="password" className="rounded-md p-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"/>
                </label>

                <div className="mt-4 text-xs text-textgrey cursor-pointer text-end">
                    <span>Forgot Password</span>
                </div>

                <div className="mt-4">
                    <button className="bg-textgreen rounded-lg w-[100%] text-white p-1">
                        LOGIN
                    </button>
                </div>

                <div className="mt-4 text-center">
                    <span className="text-textgrey text-xs">Don't have an account? </span>
                    <Link to="/register" className="text-textorange text-xs">Register</Link>
                </div>
            </form>
        </div>
    )
}
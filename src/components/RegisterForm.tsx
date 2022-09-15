import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import User from '../interfaces/user';
import { useAddNewUserMutation }  from '../features/api/registerSlice'

const RegisterForm = () => {

    const { register, handleSubmit,formState: { errors }, } = useForm<User>();
    const [addNewUser] = useAddNewUserMutation()

    const onSubmit: SubmitHandler<User> = data => {
        addNewUser(data)
        .unwrap()
        .then(()=> {})
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mt-3">
            <span className="block text-textgreen text-sm">FIRSTNAME</span>
            <input {...register("name", { required:true})} type="text" className="rounded-md p-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"/>
            <p className="mt-2 text-pink-600 text-xs">{errors.name?.type === 'required' && "First name is required"}</p>
        </label>

        <label className="block mt-3">
            <span className="block text-textgreen text-sm">LASTNAME</span>
            <input {...register("lastName", { required:true})} type="text" className="rounded-md p-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"/>
            <p className="mt-2 text-pink-600 text-xs">{errors.lastName?.type === 'required' && "First name is required"}</p>
        </label>

        <label className="block mt-3">
            <span className="block text-textgreen text-sm">EMAIL</span>
            <input {...register("email", { required:true})} type="email" className="rounded-md p-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 peer ..."/>
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-xs">
                Please provide a valid email address.
            </p>
        </label>

        <label className="block mt-2">
            <span className="block text-textgreen text-sm">PASSWORD</span>
            <input {...register("password", { required:true})} type="password" className="rounded-md p-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"/>
            <p className="mt-2 text-pink-600 text-xs">{errors.password?.type === 'required' && "First name is required"}</p>
        </label>

        <div className="mt-4">
            <input type="submit" className="bg-textgreen rounded-lg w-[100%] text-white p-1" placeholder="REGISTER"/>
        </div>
    </form>
  )
}

export default RegisterForm
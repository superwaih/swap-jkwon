import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useFormContext } from '../FormContext';

const ADMIN_PASSWORD = "Yomakjailkwon01//"
const Login = () => {
  const {setSecured} = useFormContext()
  const[showPassword, setShowPassword] = useState(false)

  const [invalidPass, setInvalidPass] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
   if(data.password === ADMIN_PASSWORD){
    setSecured(true)
   }else{
        setInvalidPass(true)
   }
  }
  return (
    <div className='m-auto flex-col p-8 gap-8 relative flex items-center justify-center h-[100vh] w-[95%]' >
       <h1 className='font-bold text-white text-2xl'>Admin Page</h1>
      <form className='flex items-center justify-center flex-col gap-8' onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8">
          <label className='text-white normal' htmlFor="">
            Please enter admin password
          </label>
          
          <div className="relative">
          <input 
            type={showPassword ? "text" : "password"}
            className='px-6 py-4 font-bold normal-text'
            {...register("password", { required: true, maxLength: 30 })}
          />
          <button

            type="button"
            className="absolute right-[10px] top-4 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <Eye />
          </button>
          </div>
        {errors.password?.type === "required" && (
                    <span className="text-red-700 text-sm">
                     Please enter password
                    </span>
                  )} 
        {invalidPass && (
                    <span className="text-red-700 text-sm">
                      Password is incorrect!
                    </span>
                  )} 
        </div>
        <button 
        className='p-6 bg-blue-600 items-center hover:opacity-70 border-2 border-black text-xl font-bold gap-8 rounded-full px-12'
        type='submit'>
          Login

        </button>

      </form>
        
    </div>
  )
}

export default Login


const Eye = ({ props }) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14.5887C3.582 14.5887 0 9.90275 0 8.58875C0 7.27474 3.582 2.58875 8 2.58875C12.418 2.58875 16 7.27474 16 8.58875C16 9.90275 12.418 14.5887 8 14.5887ZM8 12.5887C9.06087 12.5887 10.0783 12.1673 10.8284 11.4172C11.5786 10.667 12 9.64961 12 8.58875C12 7.52788 11.5786 6.51046 10.8284 5.76032C10.0783 5.01017 9.06087 4.58875 8 4.58875C6.93913 4.58875 5.92172 5.01017 5.17157 5.76032C4.42143 6.51046 4 7.52788 4 8.58875C4 9.64961 4.42143 10.667 5.17157 11.4172C5.92172 12.1673 6.93913 12.5887 8 12.5887ZM8 10.5887C7.46957 10.5887 6.96086 10.378 6.58579 10.003C6.21071 9.62789 6 9.11918 6 8.58875C6 8.05831 6.21071 7.5496 6.58579 7.17453C6.96086 6.79946 7.46957 6.58875 8 6.58875C8.53043 6.58875 9.03914 6.79946 9.41421 7.17453C9.78929 7.5496 10 8.05831 10 8.58875C10 9.11918 9.78929 9.62789 9.41421 10.003C9.03914 10.378 8.53043 10.5887 8 10.5887Z"
      fill="#A3ACB9"
    />
  </svg>
);

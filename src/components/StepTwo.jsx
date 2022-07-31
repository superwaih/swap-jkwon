import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'
import { useFormContext } from '../FormContext'

import { useForm } from "react-hook-form";

const StepTwo = () => {
  const { userData, setUserData, handleNextClick } = useFormContext()

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const onSubmit = (data) => {
   
    setUserData({...userData, "firstname" : data.firstname, "lastname" : data.lastname,
    "email" : data.email,
    "wallet_address" : data.wallet_address,
    "phone_number" : data.phone_number,
  })
    handleNextClick("three")
  }


  useEffect(() => {
    if (userData) {
      setValue("firstname", userData?.firstname);
      setValue("lastname", userData?.lastname);
      setValue("email", userData?.email);
      setValue("wallet_address", userData?.wallet_address);
      setValue("phone_number", userData?.phone_number);
    }
  }, [userData, setValue]);







  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-8 w-full'>
      <h3 className='text-xl py-8 md:text-2xl font-bold' >Enter your details</h3>
      <div className='inputs grid grid-cols-1 md:grid-cols-2 gap-8' >



        <div className='flex flex-col' >
          <input
            type="text"
            {...register("firstname", { required: true, maxLength: 30 })}
            className='p-5 font-bold outline outline-1 bg-inherit' placeholder='Firstname*' />

          {errors.firstname?.type === "required" && (
                    <span className="text-red-700 text-sm">
                      Firstname is required
                    </span>
                  )}  
        </div>



        <div className='flex flex-col'>
          <input
            {...register("lastname", { required: true, maxLength: 20 })}
            className='p-5 outline font-bold outline-1 bg-inherit' type="text" placeholder='Lastname*' />

              {errors.lastname?.type === "required" && (
                    <span className="text-red-700 text-sm">
                      Lastname is required
                    </span>
                  )}

        </div>
        <div className="flex flex-col">
          <input

            type="email"
            {...register("email", {required: true, pattern: /^\S+@\S+$/i})}

            className='p-5 outline font-bold outline-1 bg-inherit'
            placeholder='Email Address*' />
          {errors.email?.type === "required" && (
                    <span className="text-red-700 text-sm">
                      Email is required
                    </span>
                  )}

            {errors.email?.type === "pattern" && (
                    <span className="text-red-700 text-sm">
                      Email valid Email
                    </span>
                  )}

        </div>

        <div className="flex flex-col">

          <input
          {...register("wallet_address", { required: true, minLength: 30 })}

            className='p-5 outline font-bold outline-1 bg-inherit' type="text" id=""

            placeholder='Wallet Address*' />
         {errors.wallet_address?.type === "required" && (
                    <span className="text-red-700 text-sm">
                      Wallet Address is required
                    </span>
                  )}
                  {errors.wallet_address?.type === "minLength" && (
                    <span className="text-red-700 text-sm">
                      Enter valid wallet address
                    </span>
                  )}
        </div>



        <div className='flex flex-col'>
          <input
          {...register("phone_number", {minLength: 6, maxLength: 15})}

            type="telephone"
            className='p-5 outline font-bold outline-1 bg-inherit'
            placeholder='Phone Number' />

                {errors.phone_number?.type === "minLength" && (
                    <span className="text-red-700 text-sm">
                      Enter valid Phone number
                    </span>
                  )}  
                  {errors.phone_number?.type === "maxLength" && (
                    <span className="text-red-700 text-sm">
                      Enter valid Phone number
                    </span>
                  )} 
        </div>

      </div>

      <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-8  mt-12 lg:items-end lg:justify-end'>
        <button
          onClick={() => handleNextClick("one")}

          className='p-6 bg-[#ccc3c3] border-2 border-black text-xl font-bold flex items-center gap-8 rounded-full px-12'

        >
          <FaArrowCircleLeft />
          Back

        </button>

        <button
          type="submit"
          // onClick={() => handleNextClick("three")}

          className='p-6 bg-[#ccc3c3] border-2 border-black disabled:opacity-50 text-xl font-bold flex items-center gap-8 rounded-full px-12'>
          Continue <FaArrowCircleRight />
        </button>
      </div>




    </form>
  )
}

export default StepTwo
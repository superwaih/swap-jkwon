import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'
import { useFormContext } from '../FormContext'

const StepTwo = () => {
  const [errors, setError] = useState([])
  const [checks, setChecks] = useState("")
  const { userData, setUserData, handleNextClick } = useFormContext()

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleFirstNameChange = (e) =>{
    setUserData({ ...userData, "firstname": e.target.value })
    if ((e.target.value).length < 3) {
      setError(current => [...current, "firstname"]);

    }else{
      setChecks("one")
      setError((current) => current.filter(emp => {
        return emp !== "firstname"
      }))
    }
  }

  const handleLastNameChange = (e) =>{
    
    setUserData({ ...userData, "lastname": e.target.value })

    if ((e.target.value).length < 3) {
      setError(current => [...current, "lastname"]);
    }else{
      setChecks("two")
      setError((current) => current.filter(emp => {
        return emp !== "lastname"
      }))

    }
  }

  const handleChange = (e) =>{
    setUserData({ ...userData, "email": e.target.value})
    if (!isValidEmail(e.target.value)) {
      setError(current => [...current, "email"]);
    }else{
      setError((current) => current.filter(emp => {
        return emp !== "email"
      }))

    }
  }
 const handleMidNext = (e) =>{
    e.preventDefault()
    handleNextClick("three")
    setError([''])
    console.log(errors)
 }

  const handleWalletAddress = (e) =>{
    setUserData({ ...userData, "wallet_address": e.target.value })

    if ((userData["wallet_address"] && (e.target.value).length < 30)) {
      setError(current => [...current, "wallet"]);
      
    }else{
      setChecks("four")
      setError((current) => current.filter(emp => {
        return emp !== "wallet"
      }))
    }
  }

  

  return (
    <form className='p-8 w-full'>
      <h3 className='text-xl py-8 md:text-2xl font-bold' >Enter your details</h3>
      <div className='inputs grid grid-cols-1 md:grid-cols-2 gap-8' >

       <div className='flex flex-col' > 
       <input
          value={userData["firstname"]}
          required
          onChange={handleFirstNameChange}
          className='p-5 font-bold outline outline-1 bg-inherit' type="text" name="" id="" placeholder='Firstname*' />
          {userData["firstname"] && errors.includes("firstname") && (
            
            <span className='font-bold text-red-500 text-md' >Please enter a valid name </span>
          ) }
          </div> 

    <div className='flex flex-col'>
    <input
          value={userData["lastname"]}
          required
          onChange={handleLastNameChange}
          className='p-5 outline font-bold outline-1 bg-inherit' type="text" placeholder='Lastname*' />
          {userData["lastname"] && errors.includes("lastname") && (
            
            <span className='font-bold text-red-500 text-md' >Please enter a valid name </span>
          ) }
    </div>
    <div className="flex flex-col">
    <input
          value={userData["email"]}
          required
          type="email"
            onChange={handleChange}
          // onChange={(e) => setUserData({ ...userData, "email": e.target.value })}
          className='p-5 outline font-bold outline-1 bg-inherit'
          placeholder='Email Address*' />
           {userData["email"] && errors.includes("email") && (
            <span className='font-bold text-red-500 text-md' >Please enter a email </span>
          ) }


    
    </div>
        
      <div className="flex flex-col">

      <input
          value={userData["wallet_address"]}
          required
          onChange={handleWalletAddress}
          className='p-5 outline font-bold outline-1 bg-inherit' type="text" name="" id=""

          placeholder='Wallet Address*' />
            {userData["wallet_address"] && errors.includes("wallet") && (
            <span className='font-bold text-red-500 text-md' >Please enter a valid Wallet Address </span>
          ) }

      </div>
      


        <div className='flex flex-col'>
        <input
          value={userData["phone_number"]}
          onChange={(e) => setUserData({ ...userData, "phone_number": e.target.value })}
          type="telephone"
          className='p-5 outline font-bold outline-1 bg-inherit' 
          placeholder='Phone Number' />

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
          disabled={errors.length !==  0}

          onClick={handleMidNext}


          className='p-6 bg-[#ccc3c3] border-2 border-black disabled:opacity-50 text-xl font-bold flex items-center gap-8 rounded-full px-12'>
          Continue <FaArrowCircleRight />
        </button>
      </div>

      {/* <div className="checkboxes flex flex-col pt-6 py-4 space-y-4">
           <div className='space-x-2' >
           <input className=''  type="checkbox" name="terms" id="" />
            <label htmlFor="terms">By submitting this form you agree to ourTermsandPrivacy Policy.</label>
           </div>
           <div className='space-x-2' >
           <input type="checkbox" name="promotions" id="" />
            <label htmlFor="promotions">By submitting this form you agree to ourTermsandPrivacy Policy.</label>
           </div>
        </div> */}


    </form>
  )
}

export default StepTwo
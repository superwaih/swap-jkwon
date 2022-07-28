import React from 'react'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'
import { useFormContext } from '../FormContext'

const StepTwo = () => {

  const{userData, setUserData, handleNextClick} = useFormContext()

  return (
    <form className='p-8 w-full'>
        <h3 className='text-xl py-8 md:text-2xl font-bold' >Enter your details</h3>
        <div className='inputs grid grid-cols-1 md:grid-cols-2 gap-8' >
            <input 


            value={userData["firstname"]}
            onChange={(e) => setUserData({...userData, "firstname": e.target.value})}

            className='p-5 font-bold outline outline-1 bg-inherit' type="text" name="" id="" placeholder='Firstname*' />
            <input 
             value={userData["lastname"]}
             onChange={(e) => setUserData({...userData, "lastnamename": e.target.value})}
            
            className='p-5 outline font-bold outline-1 bg-inherit' type="text" placeholder='Lastname*' />
            <input 
             value={userData["email"]}
             onChange={(e) => setUserData({...userData, "email": e.target.value})}

            className='p-5 outline font-bold outline-1 bg-inherit' type="text"
             placeholder='Email Address*' />

            <input 
             value={userData["address"]}
             onChange={(e) => setUserData({...userData, "address": e.target.value})}
            
            className='p-5 outline font-bold outline-1 bg-inherit' type="text" name="" id="" 
            
            placeholder='Wallet Address*' />
        </div>

        <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-8  mt-12 lg:items-end lg:justify-end'>
          <button
          className='p-6 bg-[#ccc3c3] text-xl font-bold flex items-center gap-8 rounded-full px-12'
          onClick={() => handleNextClick("two")}>
            <FaArrowCircleLeft />
            Back
          
          </button>
         
          <button
        onClick={() => handleNextClick("three")}

          className='p-6 bg-[#ccc3c3] text-xl font-bold flex items-center gap-8 rounded-full px-12'>
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
import React from 'react'
import {BiCopy} from "react-icons/bi"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormContext } from '../FormContext';
import { data } from '../utils/data';
import { useState } from 'react';
import {CgSpinner} from "react-icons/cg"
import Spinner from './Spinner';


const StepThree = () => {
  const {userData, finalData, loading, setUserData, submitData} = useFormContext()
  const notify = (text) => {
    navigator.clipboard?.writeText && navigator.clipboard.writeText(text)
    toast.success("Address Copied!", {
      position: "bottom-right",
      autoClose: 5000,})
    // const copyText = 
  };
  if (loading) {
    return <Spinner />
  }
  
  return (
    <>

     
          <div className='grid relative grid-cols-1 md:grid-cols-2 p-4 gap-8 md:p-8' >
            <div className='flex gap-4 flex-col'>
            <select 
            value={userData["paymentMode"]}
            onChange={(e) => setUserData({...userData, "paymentMode": e.target.value})}
            
            className='p-6 w-full text-xl bg-inherit font-semibold outline outline-1' name="crypto" id="">
            <option address="" value="">Select Crypto</option>
            {data.map((data) => {
              return(
                <option className='uppercase' name={data.address} key={data.id} value={data.value}>{data.token_name}</option> 

              )
            })}
  
            </select>


              <div className='border-2 flex gap-16 p-4 border-black' >
              {!userData["paymentMode"] && (
              <p>Wallet Address of the selected crypto will appear here</p>
            )}
               
            {data.filter((data) => data.value == userData["paymentMode"]).map((data) => {
              
              return(
                <>
                <input type="text" 
                key={data.id}
                defaultValue={data.address}
                onChange={(e) => setUserData({...userData, "paymentAddress": e.target.value})}
                name="address_bar"
                className='w-full border-none outline-none'
                placeholder='Wallet Address of the selected crypto will appear here' />

                <BiCopy
                  onClick={() =>notify(data.address)}
                  className='text-3xl text-[#ccc3c3] cursor-pointer hover:text-orange-300 ' />
                </>
              )
            })}
           
        
                
              </div>
            </div>


            <div className='bg-black absolute left-[52%] top-[35px] hidden md:inline-block w-[2px] h-40' >
        </div>
            <div className='bg-black md:hidden h-1 w-full mt-8 ' >
        </div>
       
       
            <div className='max-w-[300px] grid m-auto' >
              
            {data.filter((data) => data.value == userData["paymentMode"]).map((data) => {
              return(
                <img
               
                key={data.id}
                src={data.qr_code}

                />
              )
            })}
            {!userData["paymentMode"] && (
              <p>QR Code of the selected crypto will appear here</p>
            )}
            </div>
          </div>

  
    

      <div className="btn flex flex-col-reverse lg:flex-row gap-4 items-center justify-center lg:items-end lg:justify-end p-8">

        <button
          className=' py-6 bg-[#ccc3c3] border-2 border-black disabled:opacity-50 text-xl font-bold flex items-center gap-8 rounded-full px-12 lg:px-20'>
          Back
        </button>
        <button
        disabled={loading || !(userData["paymentMode"])}
        onClick={submitData}

          className=' py-6 bg-[#ccc3c3] border-2 border-black disabled:opacity-50 text-xl font-bold flex items-center gap-8 rounded-full px-16 lg:px-32'>
          {loading ? (<span>
                <CgSpinner className="animate-spin h-6 w-6 mx-auto text-center" />
              </span>) : (
                <span>Submit</span>
              )}
        </button>

           
      </div>
      <ToastContainer />


    </>
  )
}

export default StepThree
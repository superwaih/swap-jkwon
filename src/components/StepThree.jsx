import React from 'react'
import Erc from "../components/img/solana.png"
import {BiCopy} from "react-icons/bi"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormContext } from '../FormContext';
import { data } from '../utils/data';

const StepThree = () => {
  const {userData, finalData} = useFormContext()
  const notify = () => {
    toast("Address Copied!")
    // const copyText = 
  };
  return (
    <>

      {data.filter((data) => data.value == userData["paymentCrypto"]).map((data) => {
        return (
          <div className='flex flex-col lg:flex-row justify-between p-4 md:p-8 w-full' >
            <div className='flex gap-4 flex-col'>
              <p className='border-2 p-4 border-black uppercase' >{data.token_name}</p>
              <div className='border-2 p-4 border-black' >
                <span className='break-all '>
                  {data.address}
                </span>
                <BiCopy
                  onClick={notify}
                  className='h-6 text-[#ccc3c3] cursor-pointer hover:text-orange-300 w-6' />
              </div>
            </div>
            <div className='bg-black lg:hidden h-1 w-full mt-8 ' >
            </div>
            <div className='bg-black hidden lg:inline-block w-1 mt- h-40' >
            </div>
            <div className='max-w-[300px] flex items-center justify-center lg:justify-start lg:items-start   ' >
              <img src={data.qr_code} alt="" />

            </div>


            <ToastContainer />
          </div>

        )
      })}
    

    <div className="btn flex flex-col-reverse lg:flex-row gap-4 items-center justify-center lg:items-end lg:justify-end p-8">
     
    <button
          

          className=' py-6 bg-[#ccc3c3] border-2 border-black disabled:opacity-50 text-xl font-bold flex items-center gap-8 rounded-full px-16 lg:px-24'>
            Back
            </button>
      <button
          

          className=' py-6 bg-[#ccc3c3] border-2 border-black disabled:opacity-50 text-xl font-bold flex items-center gap-8 rounded-full px-20 lg:px-40'>
            Submit 
            </button>

           
      </div>

    </>
  )
}

export default StepThree
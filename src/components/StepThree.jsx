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

      {data.filter((data) => data.token_name == userData["paymentCrypto"]).map((data) => {
        return (
          <div className='flex flex-col lg:flex-row justify-between p-8 w-full' >
            <div className='flex gap-4 flex-col'>
              <p className='outline p-4 uppercase' >{userData["paymentCrypto"]}</p>
              <div className='outline w-full gap-4 p-4 flex-col md:flex-row flex items-center md:gap-8' >
                <p className=''>
                  {data.address}
                </p>
                <BiCopy
                  onClick={notify}
                  className='h-6 text-[#ccc3c3] cursor-pointer hover:text-orange-300 w-6' />
              </div>
            </div>
            <div className='bg-black lg:hidden h-1 w-full mt-8 ' >
            </div>
            <div className='bg-black hidden lg:inline-block w-1 mt- h-40' >
            </div>
            <div className='h-60 w-60 ' >
              <img src={data.qr_code} alt="" />

            </div>


            <ToastContainer />
          </div>

        )
      })}
    

    <div className="btn flex items-end justify-end p-8">
      <button
          

          className='p-6 bg-[#ccc3c3] border-2 border-black disabled:opacity-50 text-xl font-bold flex items-center gap-8 rounded-full px-40'>
            Submit 
            </button>
      </div>

    </>
  )
}

export default StepThree
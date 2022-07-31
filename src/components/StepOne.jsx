import React from 'react'
import { useFormContext } from '../FormContext'
import {FaArrowCircleRight} from "react-icons/fa"
import { useState } from 'react'


const StepOne = () => {
  const [formErrors, setFormErrors] = useState({});
  const [enable, SetEnable] = useState()

    let valueRec;
    const {userData, setUserData, handleNextClick } = useFormContext()


    const validate = (values) => {
      const errors = {};
    
      if (!values["amount"]) {
        errors.amount = "amount is required!";
      }else if((values["amount"] < 3) &&  (!values["paymentCrypto"]  === "eth")){
        errors.amount = "please enter an amount greater than 3!";
      }else if((values["amount"] < 0.1) &&  (values["paymentCrypto"]  === "eth")){
        errors.amount = "please enter an amount greater or equal to than 0.1 ETH!";

      }
      if (!values["paymentCrypto"]) {
        errors.payment = "please select a mode of payment!";
      } else if (values["paymentCrypto"] === undefined) {
        errors.payment = "please select a mode of payment!";
      }
    
      
      return errors;
    };

    const handleSubmit = (e) =>{
      e.preventDefault();
      (setFormErrors(validate(userData)))

      if((userData["amount"] >= 150)){
        handleNextClick("two")
  
      }
    }
  

  
     
  
    //  if(userData["paymentCrypto"] === "bnb" && (userData["amount"])){
    //     valueRec = userData["amount"] * 277 / 0.01
    //  }

  //    if(userData["paymentCrypto"] === "sol" && (userData["amount"])){
  //     valueRec = userData["amount"] * 43 / 0.01
  //  }

  // if(userData["paymentCrypto"] === "eth" && (userData["amount"])){
  //   valueRec = userData["amount"] * 1500 / 0.01
  // }
  if(userData["paymentCrypto"]  && (userData["amount"])){
    valueRec = userData["amount"] * 1 / 0.01
  }
  // if(userData["paymentCrypto"] === "busd_erc20" && (userData["amount"])){
  //   valueRec = userData["amount"] * 1 / 0.01
  // }
 

  // if(userData["paymentCrypto"] === "bnb_bep2" && (userData["amount"])){
  //   valueRec = userData["amount"] * 277 / 0.01
  // }
  
     

    
  return (
    <form onSubmit={handleSubmit} 
    className='px-2 flex lg:flex-row w-full justify-between lg:space-x-16 py-3 md:py-6 md:p-8 flex-col'>
        
        <div className='w-full' >
        <h3 className='text-xl py-8 md:text-2xl font-bold'>Enter Amount & Payment Method</h3>
        <div className="inputs space-y-8 w-full">
           <div className="flex flex-col gap-2 form-group">
           <div className="input-icon">
           <input
            value={userData["amount"] || ''}
            onChange={(e) => setUserData({...userData, "amount": e.target.value})}
            
            className='p-6 border-black bg-inherit outline outline-1 w-full' type="number" placeholder='Enter an Amount in dollars' />
            {(userData["amount"] < 150) && (
              <span className='text-red-600 font-bold'>minimum purchase is 150$! </span>
            )}
            
            <i className='font-bold text-xl text-red-600'>$</i>
           </div>
           </div>

            <select 
            value={userData["paymentCrypto"] || ''}
            onChange={(e) => setUserData({...userData, "paymentCrypto": e.target.value})}
            
            className='p-4 text-xl bg-inherit font-semibold outline outline-1 w-full' name="crypto" id="">
            <option value="">Select Crypto</option>
            <option value="bnb">BSC BNB</option> 
            <option value="bnb_bep2">BEP2 BNB</option> 
            <option value="sol">Solana</option>
            <option value="usdt_erc20">USDT ERC20</option>
            <option value="busd_erc20">BUSD ERC20</option>
            <option value="eth">ETH</option>
            </select> 
        </div>
        </div>
        <div className='bg-black lg:hidden h-1 w-full mt-8 ' >
        </div>
        <div className='bg-black hidden lg:inline-block w-1 mt-16 h-40' >
        </div>




        <div className='flex flex-col w-full '>
        <h3 className='text-xl py-8 md:text-2xl font-bold'>You Receive</h3>

        <div className="receive font-bold space-y-8 flex flex-col">
           <input disabled 

           value={valueRec !== undefined ? `${valueRec} Jkwon` : `0 Jkwon` }
           
           className='p-6 outline outline-1 bg-inherit' placeholder='=0' />
           <p className='text-xl uppercase' >1 Jkwon = $0.01</p>
        </div>
        
      <div className="w-full md:w-3/4 items-center md:items-end justify-center mx-auto mr-6 md:justify-end pt-12">
      <button 
      type='submit'
      disabled={(userData["paymentCrypto"] === undefined )}
      
      className='bg-[#ccc3c3] font-bold flex border-2 border-black items-center disabled:opacity-50 justify-center gap-8 w-full md:w-3/5 py-6 rounded-full text-xl ' >
            Continue
            <FaArrowCircleRight />
        </button>
      </div>
        </div>
        
    </form>
  )
}

export default StepOne
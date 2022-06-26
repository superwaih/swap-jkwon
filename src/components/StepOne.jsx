import React from 'react'

const StepOne = () => {

    
  return (
    <form className='px-2 flex md:flex-row w-full justify-between space-x-16 py-6 md:p-8 flex-col'>
        
        <div className='w-full' >
        <h3 className='text-xl py-8 md:text-2xl font-bold'>Enter Amount & Payment Method</h3>
        <div className="inputs space-y-8 w-full">
            <input className='p-6 border-black bg-inherit outline outline-1 w-full' type="number" placeholder='Enter an Amount' />

            <select className='p-4 text-xl bg-inherit font-semibold outline outline-1 w-full' name="crypto" id="">
            <option value="">Select Crypto</option>
            <option value="bnb">B</option>   
            <option value="bnb">BNB</option>
            <option value="bnb">NB</option>
            </select> 
        </div>
        </div>
        <div className='divide-x-4 w-1 mt-24 h-40 bg-black' >

        </div>
        <div className='flex flex-col w-full '>
        <h3 className='text-xl py-8 md:text-2xl font-bold'>You Receive</h3>

        <div className="receive font-bold space-y-8 flex flex-col">
           <input className='p-6 outline outline-1 bg-inherit' type="number" placeholder='=2742874278' />
           <p className='text-xl uppercase' >1 Jkwon = 0.001</p>
        </div>
        
      <div className="w-3/4 items-end mx-auto mr-6 justify-end pt-12">
      <button type='submit' className='bg-[#EEABC4] w-full py-6 rounded-2xl p-6 text-xl ' >
            Continue
        </button>
      </div>
        </div>
        
    </form>
  )
}

export default StepOne
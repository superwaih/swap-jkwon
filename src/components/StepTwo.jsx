import React from 'react'

const StepTwo = () => {
  return (
    <form className='p-8 w-full'>
        <h3 className='text-xl py-8 md:text-2xl font-bold' >Enter your details</h3>
        <div className='inputs grid grid-cols-2 gap-8' >
            <input className='p-5 font-bold outline outline-1 bg-inherit' type="text" name="" id="" placeholder='Firstname*' />
            <input className='p-5 outline font-bold outline-1 bg-inherit' type="text" name="" id="" placeholder='Firstname*' />
            <input className='p-5 outline font-bold outline-1 bg-inherit' type="text" name="" id="" placeholder='Firstname*' />
            <input className='p-5 outline font-bold outline-1 bg-inherit' type="text" name="" id="" placeholder='Firstname*' />
            <input className='p-5 outline font-bold outline-1 bg-inherit' type="text" name="" id="" placeholder='Firstname*' />
        </div>

        <div className="checkboxes flex flex-col pt-6 py-4 space-y-4">
           <div className='space-x-2' >
           <input className=''  type="checkbox" name="terms" id="" />
            <label htmlFor="terms">By submitting this form you agree to ourTermsandPrivacy Policy.</label>
           </div>
           <div className='space-x-2' >
           <input type="checkbox" name="promotions" id="" />
            <label htmlFor="promotions">By submitting this form you agree to ourTermsandPrivacy Policy.</label>
           </div>
        </div>


    </form>
  )
}

export default StepTwo
import {CgSpinner} from "react-icons/cg"
function CountDownSpinner() {
    return (
      <div className='loadingSpinnerContainer'>
        <div className='loadingr bg-gray-500 rounded-xl mx-2   flex flex-col text-black p-8 m-auto normal w-full md:w-3/4 text-3xlitems-center justify-center'>
            Transaction is now confirming. Please monitor your inbox for a confirmation mail from our team!
            <CgSpinner className="animate-spin h-20 m-auto w-20 text-center" />
        </div>
      </div>
    )
  }
  
  export default CountDownSpinner
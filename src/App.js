import { useState } from "react";
import StepOne from "./components/StepOne";
import StepThree from "./components/StepThree";
import StepTwo from "./components/StepTwo";
import { useFormContext } from "./FormContext";


function App() {
  const {activeStep, handleActiveStep} = useFormContext()
 
  return (
    <div className="App mx-auto max-w-7xl text-black p-4 md:p-12 flex items-center justify-center ">
     
      <div className="banner border-black border-1 w-full pb-12">
        <div className="bg-[#0a182c] border-black text-[#ccc3c3] text-4xl font-bold border-b p-6" >
          JkWon Swap
        </div>
        <div className="steps p-4 py-6 md:p-8 flex justify-between">
          <h2 id="one" 
          // onClick={handleActiveStep} 
          className= {activeStep === "one" ? "active border-[#EEABC4] cursor-pointer border-b-2 uppercase font-bold" : "font-bold text-gray-300 uppercase cursor-pointer"}  name="one" >Step 1</h2>
          <h2 id="two" 
          className= {activeStep === "two" ? "active border-[#EEABC4] cursor-pointer border-b-2 uppercase font-bold" : "font-bold text-gray-300 cursor-pointer uppercase"}
          // onClick={handleActiveStep} 
          
          name="two" >Step 2</h2>
          <h2 id="three" 
          className= {activeStep === "three" ? "active border-[#EEABC4] cursor-pointer border-b-2 uppercase font-bold" : "font-bold text-gray-300 uppercase cursor-pointer"}
          // onClick={handleActiveStep}
           >Step 3</h2>
        </div>

        {activeStep === "one" && <StepOne />}
        {activeStep === "two" && <StepTwo />}
        {activeStep === "three" && <StepThree />}


       
      </div>
     
    </div>
  );
}

export default App;

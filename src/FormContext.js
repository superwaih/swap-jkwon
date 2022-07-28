
import React, { createContext, useContext, useState } from "react"

import App from "./App"

const FormContext = createContext()


export const useFormContext =() => useContext(FormContext)

const FormProvider = () => {
    const [activeStep, setActiveStep] = useState('one')
    const handleActiveStep = (e) =>{
      setActiveStep(e.target.id)
        
    }
    const handleNextClick = (data) =>{
        setActiveStep(data)
    }
    const [userData, setUserData] = useState([])
    const [finalData, setFinalData] = useState([])

    function submitData(){

    } 
   
        
    return (
        
        <FormContext.Provider 
        value={{   
            activeStep,
            setActiveStep,
            handleActiveStep,
            submitData,
            userData, 
            handleNextClick,
            setUserData,
            finalData, 
            setFinalData
        }}
        >
            <App />
        </FormContext.Provider>
    )
}
export default FormProvider
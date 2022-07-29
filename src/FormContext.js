
import React, { createContext, useContext, useState } from "react"
import {  toast } from 'react-toastify';

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
    const [loading, setLoading] = useState(false)

    function submitData(){
        setLoading(true)
        try {
            console.log("data sent")
            toast.success("message sent")
           setLoading(false)

        } catch (error) {
           setLoading(false)
            toast.error("An error occured")
        }


    } 
   
        
    return (
        
        <FormContext.Provider 
        value={{   
            activeStep,
            setActiveStep,
            handleActiveStep,
            submitData,
            userData, 
            loading,
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
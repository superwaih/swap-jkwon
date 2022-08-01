
import React, { createContext, useContext, useState } from "react"
import {  toast } from 'react-toastify';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import App from "./App"

const FormContext = createContext()


export const useFormContext =() => useContext(FormContext)


const client = axios.create({
    baseURL: "https://backendqwotum.herokuapp.com/api/forms" 
 });

const FormProvider = () => {
   
    const [activeStep, setActiveStep] = useState('one')
    const[pending, setPending] = useState(false)

   


    const handleActiveStep = (e) =>{
      setActiveStep(e.target.id)
        
    }
    const handleNextClick = (data) =>{
        setActiveStep(data)
    }
    const [userData, setUserData] = useState([])
    const [errors, setError] = useState([])
    const [finalData, setFinalData] = useState([])
    const [loading, setLoading] = useState(false)

   
 
     const submitForm = async () => {
        setLoading(true);
        try {
         fetch("https://backendqwotum.herokuapp.com/api/forms/create", {
           method: "POST",
           body: JSON.stringify({
             firstname: userData["firstname"],
             lastname: userData["lastname"],
             email: userData["email"],
             amount: userData["amount"],
             jkw_amount: (userData["amount"] * 1) * 201716.738,
             paymentCrypto: userData["paymentCrypto"],
             wallet_address: userData["wallet_address"]
           }),
           headers: {
             "Content-type": "application/json; charset=UTF-8"
           }
         })
           .then((response) => {
            if (response.status > 200 && response.status < 400) {
              toast.success("Data sent Successfully");
              setLoading(false);
              setUserData('')
            setTimeout(setPending(true), 5000)

            }})
          

        } catch (err) {
          setLoading(false);
          toast.error("An error occured")
        }
      };
   
        
    return (
        
        <FormContext.Provider 
        value={{   
            activeStep,
            setActiveStep,
            handleActiveStep,
            submitForm,
            userData, 
            pending,
            setPending,
            
            errors,
            setError,
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



// {
        //   "firstname": userData["firstname"],
        //   "lastname": userData["lastname"],
        //   "email": userData["email"],
        //   "amount": userData["amount"],
        //   "paymentMode": userData["paymentMode"],
        //   "paymentCrypto": userData["paymentCrypto"],
        //   "wallet_address": userData["wallet_address"]
        // }
        // setFinalData({...finalData,
        //          "firstname": userData["firstname"], 
        //          "lastname": userData["lastname"],
        //          "email": userData["email"],
        //          "amount": userData["amount"],
        //          "paymentMode": userData["paymentMode"],
        //          "paymentCrypto": userData["paymentCrypto"],
        //          "jkwon_amount": userData["receiveAmount"],
        //         "wallet_address": userData["wallet_address"]                
        //         })
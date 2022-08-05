import React from 'react'
import axios from "axios"
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'

import { useState } from 'react'
import { useEffect } from 'react'
import { useFormContext } from '../FormContext';
import Login from '../components/Login';

const Admin = () => {
 
  const[forms, setForms] = useState([])
  const{secured} = useFormContext()


  const fetchData = async () =>{
    fetch('https://backendqwotum.herokuapp.com/api/forms')
    .then((response) => response.json())
    .then((res) => {
       setForms(res);
    })
    .catch((err) => {
       console.log(err.message);
    });

  }
  useEffect(() => {

    fetchData()
 }, []);

   if(!secured){
    return <Login />
   }
  return (
    <ChakraProvider>

   
    <div className='m-auto p-8 w-[95%]'>
      <h1 className='font-bold text-2xl'>Admin Page</h1>
    <h3 className='text-center font-semibold text-3xl mt-8'>List of Received Transactions</h3>
    
    
    <Table variant="simple" className="!rounded-3xl border !min-w-fit">
            <Thead>
              <Tr>
                <Th
                  className="!capitalize min-w-[250px] sm:min-w-0 !font-sans !sm:text-base !text-[15px] !font-semibold"
                  px="15px"
                >
                  First Name
                </Th>
                <Th
                  px="15px"
                  className="!capitalize min-w-[130px] sm:min-w-0 !font-sans !sm:text-base !text-[15px] !font-semibold"
                >
                  Last Name
                </Th>
                <Th
                  px="15px"
                  className="!capitalize min-w-[175px] sm:min-w-0 !font-sans !sm:text-base !text-[15px] !font-semibold"
                >
                  Email
                </Th>

               

                <Th
                  px="15px"
                  className="!capitalize !font-sans !sm:text-base !text-[15px] !font-semibold "
                >
                 Amount
                </Th>

                <Th
                  px="15px"
                  className="!capitalize !font-sans !sm:text-base !text-[15px] !font-semibold "
                >
                 Payment Crypto
                </Th>
                <Th
                  px="15px"
                  className="!capitalize min-w-[175px] sm:min-w-0 !font-sans !sm:text-base !text-[15px] !font-semibold"
                >
                  Wallet address
                </Th>

                <Th
                  px="15px"
                  className="!capitalize min-w-[175px] sm:min-w-0 !font-sans !sm:text-base !text-[15px] !font-semibold"
                >
                  Phone Number
                </Th>
                <Th
                  px="15px"
                  className="!capitalize min-w-[175px] sm:min-w-0 !font-sans !sm:text-base !text-[15px] !font-semibold"
                >
                  JkWon Amount
                </Th>

                
              </Tr>
            </Thead>
            <Tbody>
              {forms?.map((form) => {
                return (
                  <Tr
                  key={form._id}
                  className="cursor-pointer"
                >
                  <Td px="15px" className="text-sm sm:text-[15px]">
                    {form.firstname}
                  </Td>
                  <Td px="15px" className="text-sm sm:text-[15px]">
                  {form.lastname}
                  </Td>
                  <Td px="15px" className="text-sm sm:text-[15px]">
                  {form.email}
                  </Td>
                  <Td px="15px" className="text-sm sm:text-[15px]">
                  {form.amount}
                  </Td>
                  <Td px="15px" className="text-sm uppercase sm:text-[15px]">
                  {form.paymentCrypto}
                  </Td>

                  <Td px="15px" className="text-sm sm:text-[15px]">
                   {form.wallet_address}
                  </Td>

                  <Td px="15px" className="text-sm sm:text-[15px]">
                   {form.phone_number}
                  </Td>
                  <Td px="15px" className="text-sm sm:text-[15px]">
                   {form.jkwon_amount}
                  </Td>
                </Tr>

                )
              })}
              
                
              
            </Tbody>
          </Table>

    </div>
    </ChakraProvider>
  )
}

export default Admin
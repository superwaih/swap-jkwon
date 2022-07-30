import React from 'react'
import axios from "axios"
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react'

import { useState } from 'react'
import { useEffect } from 'react'
const Admin = () => {
  const[data, setData] = useState([])
  useEffect(()=>{

  }, [])
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
                  Project Title
                </Th>
                <Th
                  px="15px"
                  className="!capitalize min-w-[130px] sm:min-w-0 !font-sans !sm:text-base !text-[15px] !font-semibold"
                >
                  Views
                </Th>
                <Th
                  px="15px"
                  className="!capitalize min-w-[175px] sm:min-w-0 !font-sans !sm:text-base !text-[15px] !font-semibold"
                >
                  Comments
                </Th>

                <Th
                  px="15px"
                  className="!capitalize min-w-[175px] sm:min-w-0 !font-sans !sm:text-base !text-[15px] !font-semibold"
                >
                  Appreciations
                </Th>

                <Th
                  px="15px"
                  className="!capitalize !font-sans !sm:text-base !text-[15px] !font-semibold "
                >
                  Status
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              
                <Tr
                  className="cursor-pointer"
                >
                  <Td px="15px" className="text-sm sm:text-[15px]">
                    wale
                  </Td>
                  <Td px="15px" className="text-sm sm:text-[15px]">
                    tade
                  </Td>
                  <Td px="15px" className="text-sm sm:text-[15px]">
                    wale
                  </Td>
                  <Td px="15px" className="text-sm sm:text-[15px]">
                    kunle
                  </Td>
                  <Td px="15px" className="text-sm sm:text-[15px]">
                    valencia
                  </Td>
                </Tr>
              
            </Tbody>
          </Table>

    </div>
    </ChakraProvider>
  )
}

export default Admin
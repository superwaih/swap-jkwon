import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
const Admin = () => {
  const[data, setData] = useState([])
  useEffect(()=>{

  }, [])
  return (
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
              {data?.projects_analytics?.map((data, idx) => (
                <Tr
                  key={idx}
                  onClick={() => router.push(`/${username}/${data?.slug}`)}
                  className="cursor-pointer"
                >
                  <Td px="15px" className="text-sm sm:text-[15px]">
                    {data?.title}
                  </Td>
                  <Td px="15px" className="text-sm sm:text-[15px]">
                    {data?.total_views ?? 0}
                  </Td>
                  <Td px="15px" className="text-sm sm:text-[15px]">
                    {data?.comment_count ?? 0}
                  </Td>
                  <Td px="15px" className="text-sm sm:text-[15px]">
                    {data?.like_count ?? 0}
                  </Td>
                  <Td px="15px" className="text-sm sm:text-[15px]">
                    {data?.status}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

    </div>
  )
}

export default Admin
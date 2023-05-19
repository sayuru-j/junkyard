import React, { useEffect, useState } from 'react'
import axios from "axios"

function SheduleList() {
    const [schedule, setSchedule] = useState([])
    const [deleted, setDeleted] = useState(false)

    const getSchedule = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API}/schedule`)

            setSchedule(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getSchedule()
        setDeleted(false)
    }, [deleted])


    const handleDelete = async (_id) => {
        
        try {
            const response = await axios.delete(`${import.meta.env.VITE_API}/schedule/delete/${_id}`)

            setDeleted(response?.data && true)
        } catch (error) {
            console.log(error)
        }
    }

  return (

    <div className='w-full flex flex-col items-center justify-center'>

      <div className='w-full flex justify-center py-4'>
        <h1 className='bg-accent px-4 py-1 rounded-full text-white font-medium text-[20px]'>Waste Collection Shedule</h1>
        </div>
        
        <div className='w-full flex py-4 px-20'>
              <button className='bg-accent px-5 py-1 rounded-full text-white font-medium'>Add Shedule</button>  
              </div>

    <div className="w-full flex flex-col bg-white rounded-xl border-2 max-w-6xl items-center py-10">
    <table className="w-full max-w-5xl text-sm text-left text-gray-500 dark:text-gray-400 items-center">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Area
                </th>
                <th scope="col" className="px-6 py-3">
                    Day
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                
                <th scope="col" className="px-6 py-3 text-center">
                    MODIFY
                </th>
            </tr>
        </thead>
        <tbody>
            {
                schedule.map(schedule=>(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {schedule.area}
                </th>
                <td className="px-6 py-4">
                   {schedule.date}
                </td>
                <td className="px-6 py-4">
                    {schedule.time}
                </td>
                
                <td className="px-6 py-4 text-right flex flex-col items-center">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <button onClick={handleDelete.bind(this, schedule._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
                </td>
            </tr>
                ))
            }
            
        </tbody>
    </table>
</div>
</div>

  )
}

export default SheduleList
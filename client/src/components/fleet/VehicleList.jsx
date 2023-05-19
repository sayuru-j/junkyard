import React, { useEffect, useState } from "react"
import axios from "axios"

function VehicleList() {
    const [vehicle, setVehicle] = useState([])
    const [deleted, setDeleted] = useState(false)

    const getVehicle = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API}/vehicle`)

            setVehicle(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getVehicle()
        setDeleted(false)
    }, [deleted])


    const handleDelete = async (_id) => {
        
        try {
            const response = await axios.delete(`${import.meta.env.VITE_API}/vehicle/delete/${_id}`)

            setDeleted(response?.data && true)
        } catch (error) {
            console.log(error)
        }
    }

  return (
     
    <div className='w-full flex flex-col items-center justify-center'>

<div className='w-full flex justify-center py-4'>
        <h1 className='bg-accent px-4 py-1 rounded-full text-white font-medium text-[20px]'>Vehicle Management</h1>
        </div> 
        
        <div className='w-full flex py-4 px-20'>
              <button className='bg-accent px-5 py-1 rounded-full text-white font-medium'>Add Vehicle</button>  
              </div>

              <div className="w-full flex flex-col bg-white rounded-xl border-2 max-w-6xl items-center py-10">
    <table className="w-full max-w-5xl text-sm text-left text-gray-500 dark:text-gray-400 items-center">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Fleet Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Vehicle Model Name
                </th>
                <th scope="col" className="px-6 py-3">
                    year
                </th>
                <th scope="col" className="px-6 py-3">
                    Register Number
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {
                vehicle.map(vehicle=>(
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {vehicle.model}
                </th>
                <td className="px-6 py-4">
                   {vehicle.year}
                </td>
                <td className="px-6 py-4">
                    {vehicle.fleet}
                </td>
                <td className="px-6 py-4">
                    {vehicle.register}
                </td>
                <td className="px-6 py-4">
                    {vehicle.description}
                </td>
                
                <td className="px-6 py-4 text-right flex flex-col items-center">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    <button onClick={handleDelete.bind(this, vehicle._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
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

export default VehicleList
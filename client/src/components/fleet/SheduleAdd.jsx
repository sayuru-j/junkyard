import React, { useState } from 'react'
import axios from "axios"

function SheduleAdd() {
  const [state, setState] = useState({
    area:"",
    date: "",
    time: "",
  })
  const [added, setAdded]= useState(false)

  const handleChange = (item) => (e) => {
    setState({ ...state, [item]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(`${import.meta.env.VITE_API}/schedule/add`, {
        area: state.area,
        date: state.date,
        time: state.time
      })

      setAdded(response.data && true)

      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      {JSON.stringify(state)}
    <div className='w-full flex justify-center py-4'>
    <h1 className='bg-accent px-4 py-1 rounded-full text-white font-medium text-[20px]'>Add New Shedule</h1>
    </div>

    <div className="flex flex-col bg-white rounded-xl border-2 w-full max-w-6xl">
        <div className="grid grid-cols-3 h-full">
            <div className="border-r-2">
                <img 
                className="h-full rounded-l-xl object-cover"
                src="https://www.shutterstock.com/image-vector/vector-illustration-little-people-characters-600w-1395814463.jpg"
                alt="shedule-pic"
                />
            </div>
            <div className="col-span-2 px-2">
           <form onSubmit={handleSubmit}>

           <label htmlFor="Area" className="block text-sm font-medium leading-6 text-gray-900">
                Area
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="area"
                  onChange={handleChange("area")}
                  id="area"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

           <label htmlFor="Day" className="block text-sm font-medium leading-6 text-gray-900">
                Day
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="day"
                  onChange={handleChange("date")}
                  id="day"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <label htmlFor="Time" className="block text-sm font-medium leading-6 text-gray-900">
                Time
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="time"
                  onChange={handleChange("time")}
                  id="time"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className='w-full flex py-4 items-center justify-center'>
              <button type='submit' className='bg-accent px-5 py-1 rounded-full text-white font-medium'>ADD</button>  
              </div>

           </form>
           </div>
            </div>
            </div>

    </div>
  )
}

export default SheduleAdd
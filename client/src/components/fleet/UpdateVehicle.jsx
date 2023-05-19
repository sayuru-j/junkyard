import React from 'react'

function UpdateVehicle() {
  return ( 

    <div className='w-full flex flex-col items-center justify-center'>
    <div className='w-full flex justify-center py-4'>
    <h1 className='bg-accent px-4 py-1 rounded-full text-white font-medium text-[20px]'>Update Vehicle</h1>s
    </div>

    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col bg-white rounded-xl border-2 w-full max-w-6xl"> 
        <form class="flex flex-col w-full max-w-sm">
         
         <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Vehicle Model Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value="Jane Doe"
                />
              </div>

              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Year
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="year"
                  id="year"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value="2012"
                />
              </div>

              <label htmlFor="fleet number" className="block text-sm font-medium leading-6 text-gray-900">
                Fleet Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fleet number"
                  id="fleet number"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value="KI-8734"
                />
              </div>

              <label htmlFor="register number" className="block text-sm font-medium leading-6 text-gray-900">
                      Register Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="register number"
                  id="register number"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value="W0672"
                />
              </div>

              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                      Description
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="description"
                  id="description"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value="No problem"
                />
              </div>
  
    <div class="md:flex md:items-center">
     <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
        <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Sign Up
      </button>
      </div>
         </div>
        </form>

     </div>
     </div>
     </div>
  )
}

export default UpdateVehicle
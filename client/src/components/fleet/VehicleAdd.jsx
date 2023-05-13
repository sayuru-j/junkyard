import { PhotographIcon, UserIcon } from '@heroicons/react/outline'

function VehicleAdd() {
  return (
   <div className='w-full flex flex-col items-center justify-center'>
    <div className='w-full flex justify-center py-4'>
    <h1 className='bg-accent px-4 py-1 rounded-full text-white font-medium text-[20px]'>Add New Vehicle</h1>
    </div>
     <div className="flex flex-col bg-white rounded-xl border-2 w-full max-w-6xl">
        <div className="grid grid-cols-3 h-full">
            <div className="border-r-2">
                <img 
                className="h-full rounded-l-xl object-cover"
                src="https://thumbs.dreamstime.com/b/american-style-truck-freeway-pulling-load-transportation-theme-road-cars-174771780.jpg"
                alt="truck-pic"
                />
            </div>
            <div className="col-span-2 px-2">
           <form>
           <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Upload Image
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotographIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span className='px-2'>Upload a image</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>

              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Vehicle Model Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
 
                    
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Year
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>   

              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Fleet Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Register Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>      

              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div> 

              <div className='w-full flex py-4 items-center justify-center'>
              <button className='bg-accent px-5 py-1 rounded-full text-white font-medium'>DONE</button>  
              </div>

           </form>
            </div>
        </div>
    </div>
   </div>
  )
}

export default VehicleAdd
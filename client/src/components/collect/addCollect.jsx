import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  TrashIcon,
  PencilIcon,
  DocumentDownloadIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import { useNavigate } from 'react-router-dom';

function AddCollection() {
    const navigate = useNavigate()
    const [success, setSuccess]= useState("")
  const [state, setState] = useState({
    name: "",
    address:"",
    collectionDate: "",
    wasteType: "",
    quantity: ""
  })

  const handleChange = (item)=> (e) =>{
    setState({
        ...state,
        [item]: e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
        const response = await axios.post(`${import.meta.env.VITE_API}/collection/add`,{
            name: state.name,
            address: state.address,
            collectionDate: state.collectionDate.split("T")[0],
            wasteType:state.wasteType,
            quantity: state.quantity
        })

        console.log(response.data)
        if(response.data){
            navigate("/CollectSuccess")
        }
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className='min-h-screen grid grid-cols-4 pt-20'>
    <div>

    </div>
    <div className='col-span-3'>
    <form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Name
      </label>
      <input 
      onChange={handleChange("name")}
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Address
      </label>
      <input
      onChange={handleChange("address")} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Collection Date
      </label>
      <input onChange={handleChange("collectionDate")} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  
</form>
    </div>
    </div>
  )
}

export default AddCollection
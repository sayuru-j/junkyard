import React from 'react'
import AddNewCollection from '../../../components/collect/getCollection'

function CollectPublic() {
  return (
    <div className='min-h-screen flex flex-col items-center'>
      <h1 className='text-lg font-bold text-primary'>Pickup Request</h1>

      <AddNewCollection/>

      
    </div>
  )
}

export default CollectPublic
import React from 'react'

const DataCard = ({item}) => {
  return (
    <div className=' container'>
       <ul className='m-6'>
       {item.id}.
        <li className='text-2xl'>{item.name}</li>
        <li className='list-item text-xl'>{item.email}</li>
        <li className='list-item text-sm'>{item.body}</li>
       </ul>
    </div>
  )
}

export default DataCard

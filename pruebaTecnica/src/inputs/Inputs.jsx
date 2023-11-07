import React from 'react'

function Inputs({
  name,
  type,
}) 
{
  return (
    <div className='id-container'>
      <label htmlFor="">{name} </label>
      <input type={type}/>
    </div>
  )
}

export default Inputs
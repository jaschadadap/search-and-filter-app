import React from 'react'

export default function ListView({ list, handleAdd }) {
  return (
    <div className=''>
      <h2>Add item:</h2>
      <form onSubmit={handleAdd} id='add-item'>
        <input type="text" className='text-[#101721]'/>
        <button className='px-3 py-1/2 ml-2 mr-8 rounded bg-white text-[#101721]'>add</button>
      </form>

      <ul>
      {list && list.map(item => (
        <li key={item}>{item}</li>
      ))}
      </ul>
    </div>
  )
}

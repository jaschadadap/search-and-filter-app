import React from 'react'

export default function ListView({ list, handleAdd }) {
  return (
    <div>
      <h2>Add item:</h2>
      <form onSubmit={handleAdd} id='add-item'>
        <input type="text" />
        <button>add</button>
      </form>

      <ul>
      {list && list.map(item => (
        <li key={item}>{item}</li>
      ))}
      </ul>
    </div>
  )
}

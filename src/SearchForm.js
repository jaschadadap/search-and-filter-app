import React from 'react'

export default function SearchForm({ filterList, filteredList }) {
  return (

    <div className='pl-2'>
      <p>Filter:</p>
      <form id='search-filter'><input type="text" onChange={filterList} /></form>

      <ul>
        {filteredList && filteredList.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

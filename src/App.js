import { useEffect, useState } from 'react';
import './App.css';
import ListView from './ListView';
import SearchForm from './SearchForm';

function App() {
  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState([])

  const handleAdd = (e) => {
    e.preventDefault()
    const newItem = e.target[0].value
    setList([...list, newItem])
    document.getElementById('add-item').reset()
    document.getElementById('search-filter').reset()
  }

  const filterList = async (e) => {
    let searchKey = e.target.value
    let matches = list.filter(item => item.includes(searchKey))
    await setFilteredList(matches)
  }

  useEffect(()=>{
    console.log(filteredList)
  },[filteredList])

  useEffect(()=>{
    setFilteredList(list)
  },[list])

  return (
    <div className='bg-[#101721] text-white h-screen w-screen flex items-center justify-center flex-col '>
      <h1 className='font-black text-3xl mb-8'>Search and Filter App</h1>
      <div className="flex items-center justify-center">
        
        <ListView list={list} handleAdd={handleAdd}/>
        <SearchForm filterList={filterList} filteredList={filteredList} />
      </div>
    </div>

  );
}

export default App;

  // const [names, setNames] = useState([])
  
  // const [filteredNames, setFilteredNames] = useState(names)

  // const filterBySearch = (event) => {
  //   const query = event.target.value
  //   let updatedList = [...names]
  //   updatedList = updatedList.filter(item => {
  //     return item.includes(query)
  //   })
  //   setFilteredNames(updatedList)
  // }  

  // const addName = async (e) => {
  //   e.preventDefault()
  //   let newName = e.target[0].value
  //   let arr = [...names]
  //   await arr.push(newName)
  //   setNames(arr)
  //   document.getElementById("add-name").reset()
  // }

  // useEffect(()=>{
  //   setFilteredNames(names)
  //   console.log(names)
  // },[names])

  


      // {/* <div className=''>
      //   <input type="text" onChange={filterBySearch} />
      //   <div>
      //     <ul>
      //       {filteredNames && filteredNames.map(name => (
      //         <li key={name}>{name}</li>
      //       ))}
      //     </ul>
      //   </div>
      //   <div>
      //     <form onSubmit={addName} id='add-name'>
      //       <input type="text" placeholder='add to list'/>
      //       <button>submit</button>
      //     </form>
      //   </div>      
      // </div> */}

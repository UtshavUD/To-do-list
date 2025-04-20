import React, { useState } from 'react'
import Card from './Card'


const Todo = () => {

    const [data,setDataa]=useState([])
  
    const initial={
      title:"",
      description:"",
      type:""
    }
  
    const [add,setAdd]=useState(initial);
  
    const handleSubmit=(e)=>{
      e.preventDefault();
      setDataa((prev)=>[...prev,add]);
      setAdd(initial)    
    }
    console.log(data);
    
    const handleChange=(e)=>{
      setAdd(prev=>({...prev,[e.target.name]:e.target.value}));
    }
  

const [isdata,setData]=useState()

const handleList=()=>{
    setData(true);
}

const handleCancel=()=>{
  setData(false);
}

const handleDelete = (index) => {
  // Remove the item at the specified index
  setDataa((prev) => prev.filter((_, i) => i !== index));
};


  return (
    <div className='flex  flex-col items-center w-full h-screen p-5 bg-indigo-400'>
        <h1 className='text-center font-bold font-serif text-3xl mt-5'>To-do-List</h1>
  
  <div> <input type='text' placeholder='Search...' className=' border-2 border-black rounded-md w-96 mt-10 px-2'/>
  <button onClick={handleList} className='border rounded-md border-black mx-3 w-28 h-8 p-1 font-bold bg-black text-white'>Add</button>

  </div>


  <div className=' grid grid-cols-3 gap-2'>
              {
                  
                    data.map((item,index) => {
                        return (
                           <Card onDelete={()=>handleDelete(index)} key={index} title={item.title} des={item.description} type={item.type} />
                        )
                    })
                }
                </div>


{isdata&&
<div className="border rounded-lg border-gray-300 p-4 max-w-md mx-auto shadow-lg bg-white absolute top-52 ">
      <h1 className="font-bold text-center text-xl text-gray-700 mb-4">Add-Item</h1>

      <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">

        <input onChange={handleChange} 
        value={add.title}   
          type="text" 
          name='title'
          placeholder="Title..." 
          required
          className="border rounded-md border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
         
        <textarea onChange={handleChange} required
        name='description'
        value={add.description}
          placeholder="Description..." 
          className="border rounded-md border-gray-300 px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
        
        <select value={add.type} onChange={handleChange} name="type" id="" required className='border border-black text-white bg-black rounded-lg'>
          <option value="" >--Select Priority--</option>
          <option value={true} >Important</option>
          <option value={false}>Normal</option>
         </select>
  
        <button type='submit'
          className="bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300" >
          Add Item
        </button>

        <button onClick={handleCancel}  className="bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-rose-900 transition duration-300">
          Cancel
          </button>

      </div>
      </form>
                 
    </div>
}

</div>
  )
}

export default Todo
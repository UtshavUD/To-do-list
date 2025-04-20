import React, { useState } from 'react';

const Addlist = ({oncancel}) => {

  const [data,setData]=useState([])

  const initial={
    title:"",
    description:"",
    type:""
  }

  const [add,setAdd]=useState(initial);

  const handleSubmit=(e)=>{
    e.preventDefault();
    setData((prev)=>[...prev,add]);
    setAdd(initial)    
  }
  console.log(data);
  
  const handleChange=(e)=>{
    setAdd(prev=>({...prev,[e.target.name]:e.target.value}));
  }

  

  return (
    <>
    <div className="border rounded-lg border-gray-300 p-4 max-w-md mx-auto shadow-lg bg-white">
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

        <button onClick={oncancel}  className="bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-rose-900 transition duration-300">
          Cancel
          </button>

      </div>
      </form>
                 
    </div>
    </>
  );
};



export default Addlist;

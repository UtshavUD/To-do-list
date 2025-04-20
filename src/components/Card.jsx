import React from 'react';

const Card = ({ title, des,type,onDelete}) => {

  return (
    <div  className={`${type === 'true' ? 'bg-rose-950 text-white' : 'bg-blue-300 text-black'} flex flex-col gap-6 mt-10 border border-gray-300 rounded-lg p-6 shadow-lg  w-[20rem] h-auto hover:shadow-xl transition-shadow duration-300`}>
      <h2 className="text-xl font-serif">Title:- {title}</h2>
      <p className="font-serif font-normal text-md ">Description:- {des} </p>

      <div className="flex justify-between mt-auto">
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 transition-colors duration-200">
          Edit
        </button>
        <button onClick={onDelete} className="px-4 py-2 text-sm font-medium text-white bg-rose-600 rounded-md shadow hover:bg-red-600 transition-colors duration-200">
          Delete
        </button> 
      </div>
    </div>
    
  );
};

export default Card;

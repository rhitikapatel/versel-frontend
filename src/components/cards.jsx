import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Cards({item}) {
  const navigate = useNavigate();

  const handleQuestionsClick = () => {
    navigate(`/questions/${item.id}`);
  };

  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card  w-92  bg-base-100 shadow-x1 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure >
    <img
      src={item.image}
      alt="Company" />
      
  </figure>  
  <div className="card-body">
    <h2 className="card-title">
      {item.title}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.description}</p>
    <div className="card-actions flex justify-between">
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Notes</div>
      <div 
        onClick={handleQuestionsClick}
        className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200"
      >
        Questions
      </div>
    </div>
  </div>
</div>
</div>
    </>
  )
}
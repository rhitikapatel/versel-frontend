import React, { useState, useEffect } from 'react';
import Cards from './cards';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Course() {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const res = await axios.get('http://localhost:4001/company');
        console.log(res.data);
        setCompany(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCompany();
  }, []);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>
            <span className='text-blue-500'>Welcome, coder!</span> You’ve just unlocked the tools to write cleaner code, crack tougher problems, and think like an engineer.
          </h1>
          <p className=' mt-12'>
            Welcome to the next level of your coding journey!
            By choosing to invest in yourself, you've stepped into a space built for growth,
            challenge, and transformation. Here, every algorithm you solve, every bug you tackle,
            and every concept you master brings you closer to becoming not just a better programmer —
            but a confident problem solver. This is more than just code; it's the foundation of your
            future. So gear up, stay curious, and let’s build something incredible — one line at a time.
          </p>
          <Link to="/">
            <button className='mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300'>
              Back
            </button>
          </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6'>
          {
            company.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}
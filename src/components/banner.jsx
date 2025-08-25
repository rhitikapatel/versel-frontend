import React from 'react'
import bannerphoto from '../../public/bannerphoto.jpg'
function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row pt-24 my-10 ">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
        <div className='space-y-12'>
        <h1 className="text-4xl font-bold"><span className="text-blue-500">Hello, world!</span> Let's write some history."</h1>
        <p className="text-xl">
            Coding is a journey, not a destination. Every expert once struggled with their first “Hello, World.” 
            With each problem you solve, you sharpen your thinking and grow stronger. Stay consistent, embrace the bugs, 
            and trust the process. Your future in tech starts with the code you write today.</p>
        
        <label className="input validator ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </g>
  </svg>
  <input className=" mt-6"
    type="text"
    required
    placeholder="Username"
    pattern="[A-Za-z][A-Za-z0-9\-]*"
    minlength="3"
    maxlength="30"
    title="Only letters, numbers or dash"
  />
</label>
    
       </div>
             <button className="btn mt-6 bg-blue-500">Secondary</button>
        </div>
        <div className="order-1 w-full md:w-1/2 mt-10">
<img src={bannerphoto}  className= "w-full h-auto" alt= "" />

        </div>

    </div>
    </>
  )
}
export default Banner;


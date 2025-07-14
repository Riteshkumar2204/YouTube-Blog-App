// import React from 'react'

// export default function Notfound() {
//   return (
    
//         <div className='flex flex-col h-screen items-center justify-center'>
//             <h1 className='text-2xl font-semibold'>404</h1>
//             <span className='text-xl text-gray-800' >Page Not Found</span>
//         </div>
    
//   )
// }


import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-10 text-center">
      <div className="max-w-xl">
        <img
          src="/notFound.svg"
          alt="notFound"
          className="w-full max-w-[400px] mx-auto mb-6"
        />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          LOOKS LIKE YOU'RE LOST
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          We can't seem to find the page you're looking for.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white bg-black px-5 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          Back to Home <HiOutlineArrowNarrowRight className="text-xl" />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;


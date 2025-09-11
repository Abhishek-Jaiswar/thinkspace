import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex flex-col items-center gap-10 justify-center min-h-screen bg-orange-50'>
      <div className=' text-center'>
        <img className='w-52' src="./globe.svg" alt="logo" />
        <h1 className='text-7xl text-orange-500'>4 <span className='text-neutral-800'>0</span> 4</h1>
        <h1 className='text-lg text-neutral-600'>Not Found on this globe</h1>
      </div>
      <div className=''>
        <Link to={'/'} className='px-4 py-2 bg-orange-500 text-neutral-50 rounded-sm hover:bg-orange-400 transition-colors duration-200 ease-in '>
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}

export default Error
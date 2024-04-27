import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    
      <footer aria-label="Site Footer" className=" fixed bottom-5 left-1/2 -translate-x-1/2">
      <Link className='flex flex-row items-center transition-all duration-400 '  target='_blank' href='/'>
        <img className='hover:-rotate-45' src='/images/favicon.ico' />
        <h5 className='text-indigo-400 pl-3 font-bold hover:text-indigo-300 '> Try LinkHub</h5>
      </Link>
   
    </footer>
  )
}

export default Footer
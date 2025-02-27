import Link from 'next/link'
import React from 'react'

const contact = () => {
  return (
    <div>
    <div className="flex justify-between w-full p-10 h-5 bg-black text-white">
    <h2>
    3 Assignment 
    </h2>
    <nav style={{ padding: '20px', backgroundColor: '#333', color: '#fff' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/footer">Footer</Link></li>
      </ul>
    </nav>
   </div>
    <div className="flex justify-center text-4xl font-extrabold items-center h-full m-7 p-5">
    <h1>
      This is a Contact Page 
    </h1>
   </div>
 </div>
  )
}

export default contact
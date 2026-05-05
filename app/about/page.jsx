import Link from 'next/link'
import React from 'react'

function page() {
    const students = ['Jaydeb','Subha','Rudra']
  return (
  <>
  <div className='w-screen h-full flex justify-center items-center flex-col'>
    <h1 className='text-lime-400 text-[40px] mb-[40px]'>Student of BSc.IT 2026</h1>
    {students.map((item,index)=>(
      <div key={index}>
        <Link href={`/about/${item}`}> 
          <div className='w-[100px] h-[60px] bg-emerald-100 m-[30px] flex justify-center items-center rounded-2xl text-black'>{item}</div>
          </Link>
      </div>
    ))}
  </div>
  </>
  )
}

export default page
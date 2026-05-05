"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Nav() {
    const pathName = usePathname()
  return (
    <>
      <div className="bg-gray-100 h-[40px] w-screen flex justify-between items-center">
        <div className='text-[24px] text-blue-900 font-bold ml-10'>
            Friends 
        </div>
        <div className='mr-28'>
            <ul className='text-purple-800 w-[400px] flex justify-around cursor-pointer font-extrabold text-[16px]'>
                <li> <Link href={"/"} className={pathName=="/"?"text-green-600":""}>Home</Link></li>
                <li> <Link href={"/about"} className={pathName=="/about"?"text-green-600":""}>about</Link></li>
                <li><Link href={"/contactus"} className={pathName=="/contactus"?"text-green-600":""}>Contact Us</Link></li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Nav

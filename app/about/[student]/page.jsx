"use client"
import {useParams} from 'next/navigation'
import React from 'react'
import Image from 'next/image';
import Jaydeb from "../../assest/Jaydeb.jpg";
import Rudra from "../../assest/Rudra.jpg";
import Subha from "../../assest/Subha.jpg";



function studentpage() {
    const  params = useParams()
    const name = params.student
    const std_pic = name == "Jaydeb" ? Jaydeb : name == "Subha"? Subha : name == "Rudra"? Rudra : ""
    
  return (
    <div style={{background:"#009900"}} className="h-100 flex justify-center items-center flex-col">


         <p className='text-[30px]'>  name of the student is {name} </p>

         <Image src={`/${name}.jpg`} width={100} height={400} alt={name} />
         
            <Image src={std_pic} width={100} height={400} alt={name} />
         

    </div>
  )
}

export default studentpage

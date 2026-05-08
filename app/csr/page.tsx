// CSR : client Side Rendering
"use client"
import React, { useEffect, useState } from 'react'

function page() {

    type dataType = {
        message : string,
        name : string,
        age : number
    }

    const [data, setData] = useState({})
    
    const fetchApi = async ()=>{

    let responce = await fetch('/api/user')
    let apidata = await responce.json()
    console.log("data : ",apidata);
    await setData(apidata)
    await console.log("display data",data);
    
    }
    
    useEffect(()=>{
        fetchApi()
    },[])

    return (
    <div>
      <h1>SSR : Server Side Rendering Page </h1>
      <h1>message : {data.message}</h1>
      <h1>name : {data.name}</h1>
      <h1>age : {data.age}</h1>
    </div>
)
}

export default page

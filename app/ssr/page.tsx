// SSR : Server Side Rendering

import React from 'react'

async function page() {

    let responce = await fetch('http://localhost:3000/api/user',{
        cache :"no-store" // no data will be stored in cache
    })

    console.log(responce);
    
    let data = await responce.json()

    console.log("data : ",data);
    
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

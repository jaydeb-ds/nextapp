// SSG : Static Sid Generation

// In ssg calls api on the build time only, and farther it will not call api

import React from 'react'

async function page() {

    let responce = await fetch('http://localhost:3000/api/user',{
        cache : "force-cache" // data will be stored in cache & and data will not updata after the api is called in build time
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

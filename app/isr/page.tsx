// ISR : Incremental Static Rendering
// the api will load after a point of time
import React from 'react'

async function page() {

    let responce = await fetch('http://localhost:3000/api/user',{
        next : {revalidate : 2} // this 5 means , the api will again call after 5 second
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

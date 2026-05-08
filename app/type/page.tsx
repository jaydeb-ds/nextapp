'use client'
import React, { useEffect, useState } from 'react'
import Button from '../button'

function page() {
    let user : userType = "admin"
    let login : loginStatus = "success"

    // for useState
    const [count, setCount ] = useState<number>(10)

    const [name,setName] = useState<string>("")



  return (
    <div>
      <h1>TypeScript learning</h1>
      <h1>{user}</h1>
      <h1>userState in react {count}</h1>
      <Button data={count} />
    </div>
  )
}

export default page

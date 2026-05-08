
import React, { useState } from 'react'
type buttonPropes ={
    data: number
    // setData :number
    // setData : ()=> void
}

function Button({data,}:buttonPropes) {
    console.log(data);

    const [btnData, setBtnData] = useState<number>(0)

    function btnFn()
    {
        setBtnData(prev => prev + 1)
        data = data + btnData
    }
    
  return (
    <div>
      <button onClick={()=>btnFn()}>click me </button>
      <h1>btn data : {btnData} and data : {data} </h1>
    </div>
  )
}

export default Button

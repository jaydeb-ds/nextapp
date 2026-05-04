import React from 'react'
import Image from 'next/image'
import { Poppins} from 'next/font/google'

const poppins = Poppins({subsets:['latin'],weight:['600','600']})


const page = () => {
 
  return (
    <div>profile
      <Image src="/dp.jpeg" width={300} height={400} />
      
      font 
      <p className={poppins.className}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ipsum? Molestias recusandae quas facilis dolore et hic ducimus consequuntur ipsa enim doloremque aliquid dolor natus cum placeat, eligendi eum provident!
      </p>

    </div>
  )
}

export default page
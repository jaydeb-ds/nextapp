import React from 'react'

async function page ({params}) {
    const posts = await params
    console.log(posts.allpost);
    
  return (
    <div>
       all post are:- 
       {posts.allpost.map((post,index) => (
        <>
        <li key={post.i}>{post}---{index}</li>
        </>
       ))}
    </div>
  )
}

export default page

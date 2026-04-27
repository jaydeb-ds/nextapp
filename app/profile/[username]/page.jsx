import React from 'react'

// params is a promise in Next.js 15+
export default async function User({params}) {
    const { username } = await params; 

    return (
        <div>
            <h1>Dynamic Routing</h1>
            <p>This is the profile page for - <strong>{username}</strong></p>
        </div>
    )
}
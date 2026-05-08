// GET request

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({message:"hello! welcome to  user route"})
}

// url = http://localhost:3000/api/user

// POST request

export async function POST(request:NextRequest) {
    
    const body = await request.json();
    return NextResponse.json({message:"Data Received",data: body})
}

// same url
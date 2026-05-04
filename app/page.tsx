"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <>
      Home page

      navigation 
      <a href="/about">about</a>
      <Link href={"/profile"}>profile image</Link>

      <button onClick={()=>router.push("/post")}>
        go to my post page
      </button>
    </>
  );
}

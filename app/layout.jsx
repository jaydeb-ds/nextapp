import './globals.css'
import { Poppins } from "next/font/google";
import Nav from "./components/Nav.jsx"

const font = Poppins({
  subset:['latin'],
  weight:['500','700'],
  display:'swap'
})

export const metadata = {
  title : "friends",
  description : "BIT batch 2026 friends"
}

export default function RootLayout({children}) {
  return (
    <html
      lang="en"
    >
      <body
      className={`${font.className} bg-gray-800 w-screen h-screen text-white`}>
        <Nav/>
        {children}
        </body>
    </html>
  );
}

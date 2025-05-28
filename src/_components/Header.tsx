import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="text-white bg-blue-950 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <span className="ml-3 text-white text-xl font-bold">BizBazar</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-900">Home</Link>
      <Link href={"/about"} className="mr-5 hover:text-blue-900">About</Link>
      <Link href={"/product"} className="mr-5 hover:text-blue-900">Product</Link>
      <Link href={"/contact"} className="mr-5 hover:text-blue-900">Contact</Link>
    </nav>
    <Link href={"/signup"}>
    <button className="inline-flex items-center bg-gray-100 text-blue-950 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 cursor-pointer rounded text-base mt-4 md:mt-0">
      SignUp
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
    </Link>
  </div>
</header>

  )
}

export default Header

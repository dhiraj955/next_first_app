import Link from 'next/link';
import React from 'react'

async function page() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data : {title: string, id: number}[] = await res.json();
  return (
    <div>
      {data.map((item, index) => (
        <Link href={"/product/" + item.id} key={index}>
        <div >
            {item.title}
        </div>
        </Link>
      ))}
    </div>
  )
}

export default page

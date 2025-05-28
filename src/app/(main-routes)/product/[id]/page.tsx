import React from 'react'

type Product = {
     id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

async function page({params} : {params: Promise<{id: string}>}) {
    const param =  await params;
    const res = await fetch(`https://fakestoreapi.com/products/${param.id}`);
    const data: Product = await res.json();
  return (
    <div className='flex gap-4'>
      <img src={data.image} alt="" height={"200"} width={"200"}/>
      <div >
       <h2 >Title : {data.title} </h2>
      <h4>Price: {data.price}</h4>
      </div>
    </div>
  )
}

export default page

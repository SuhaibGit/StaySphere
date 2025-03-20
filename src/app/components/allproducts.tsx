import Link from 'next/link'
import React from 'react'
import { products } from "../products/product";


const AllProduct = () => {
  return (
    <>
    <div className="h-[100px] md:h-[150px] w-[100%] bg-white flex justify-center md:justify-start  items-center  md:pl-[150px] pt-[40px] text-[30px] md:text-[36px] font-light text-white" > <h1 className='text-gray-700 font-extrabold tracking-wider'>Featured Hotels</h1></div>
    <div className='h-[90%] bg-white flex flex-col justify-center gap-2 items-center'>
        <div className='flex flex-wrap gap-8 justify-center pt-10 mb-8'>
            {products.map((product)=>(
                <div key={product.id} className="w-[305px] h-[462px] bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                >
                <div
                  className="h-[375px] bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${product.image})` }}
                ><Link href={`/products/${product.id}`} className="block w-full h-full">
              </Link>
              </div>
            <div className="py-4 px-3">
              <h2 className="text-black">{product.title}</h2>
              <p className="text-black">${product.price}</p>
            </div>
            
              </div>
            ))}
        </div>
        <Link href={"/products"}><button className='mb-[40px] mx-[24px] h-[56px] w-[170px] bg-black text-white border border-black rounded-lg shadow-sm hover:shadow-lg hover:bg-white hover:text-black hover:cursor-pointer transition-shadow'>
            Back to Top
        </button></Link>
    </div>
    </>
  )
}

export default AllProduct
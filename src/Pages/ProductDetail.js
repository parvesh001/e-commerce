import React from 'react'
import { useParams } from 'react-router-dom'
import { Product__Data } from '../Components/Products/ProductsData'

export default function ProductDetail() {
    const params  = useParams()
    const product = Product__Data.filter((pro)=>{
        return pro.id === params.productId
    })
   console.log(product)
  return (
    <div className='mt-2 mt-md-5'>
     <h1 className='text-dark'>product details</h1>
     <h1 className='text-dark'>product details</h1>
     <h1 className='text-dark'>product details</h1>
      <img src={product.img} alt="img" />
    </div>
  )
}

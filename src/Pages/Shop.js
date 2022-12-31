import React from 'react'
import Pagination from '../Components/Pagination/Pagination'
import Products from '../Components/Products/Products'
import style from "./Shop.module.scss"

export default function Shop() {
  return (
    <>
    <div className={`${style['shop-now']}`}>
       <h1>#Stay Home</h1>
       <h6 className='bg-light px-2 p-1 d-inline'>Save more with coupans and up to 70%!!</h6>
    </div>
      <Products productsTitle={"Shop Now & Save Money"} productsText={"Don't lose this chance!"}/>
      <Pagination />
    </>
  )
}

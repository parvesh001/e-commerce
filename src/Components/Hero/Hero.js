import React from 'react'
import TransparentButton from '../../UI/TransparentButton/TransparentButton'
import style from './Hero.module.scss'

export default function Hero() {
  return (
    <div className={style['home-hero']}>
      <h2>Trade-in-offer</h2>
      <div className='mt2'>
      <h1>Super Value Deals</h1>
      <span className='mt-2'>On All Products</span>
      </div>
      <p className='mt-2 fs-5 bg-light'>Save More With Coupans and Upto 70% Off!</p>
      <TransparentButton className='mt-1 mt-md-3'>Shop Now</TransparentButton>
    </div>
  )
}

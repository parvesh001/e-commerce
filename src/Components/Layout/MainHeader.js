import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from '../../Assets/logo/puma.png'
import style from './MainHeader.module.css'

export default function MainHeader() {
    const linksClasses = (navData) => (navData.isActive ? `${style.active} ${style.navlink}` : style.navlink);
  return (
    <header className={style.mainHeader}>
      <div className={style.logo}>
        <img src={logo} width="100%" alt="website-logo" />
      </div>
      <nav>
        <ul className={style.navList}>
            <li><NavLink className={linksClasses} to='/home'>Home</NavLink></li>
            <li><NavLink className={linksClasses} to='/shop'>Shop</NavLink></li>
            <li><NavLink className={linksClasses} to='/blog'>Blog</NavLink></li>
            <li><NavLink className={linksClasses} to='/about'>About</NavLink></li>
            <li><NavLink className={linksClasses} to='/contact'>Contact</NavLink></li>
            <li><NavLink className={linksClasses} to='/cart'>Cart</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

import React, { useState } from 'react'
import css from './Header.module.css'
import Logo  from '../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
import {GoThreeBars} from 'react-icons/go'
const Header=()=>{
     const [showMenu,setShowMenu]=useState(true)
return(
    <div className={css.container}>
        <div className={css.logo}>
           <img src={Logo} alt="" />amazon
        </div>

        <div className={css.right}> 

        <div className={css.bars}>
            <GoThreeBars/>
        </div>

        <div className={css.menu}>
            <ul className={css.menu}>
                <li>Collection</li>
                <li>Brands</li>
                <li>new</li>
                <li>Sales</li>
                <li>ENG</li>

            </ul>
         </div>
         <input type="text" className={css.search} placeholder="search"/>
         <CgShoppingBag className={css.cart}></CgShoppingBag>
        </div>
        
            </div>
)
}
export default Header;
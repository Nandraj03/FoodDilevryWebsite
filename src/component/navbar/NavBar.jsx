import React, { useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
const NavBar = () => {
    const [menu, setMenu] = useState("Home");
    return (
        <div className='navbar'>
            <img src={assets.logo} alt="logo" className='logo' />
            <ul className="navbar-menu">
                <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
                <li onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</li>
                <li onClick={() => setMenu("Order")} className={menu === "Order" ? "active" : ""}>Order</li>
                <li onClick={() => setMenu("About")} className={menu === "About" ? "active" : ""}>About</li>
                <li onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</li>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search" />
                <div className="navbar-search-icon">
                    <img src={assets.basket_icon} alt="basket" />
                    <div className="dot"></div>
                </div>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default NavBar
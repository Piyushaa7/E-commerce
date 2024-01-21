import React, { useContext, useState } from "react";
import './Navbar.css'
import logo from '../Assests/Assets/logo.png'
import cart_icon from '../Assests/Assets/cart_icon.png'
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () =>{
    // getTotalCartItems
    const [menu,SetMenu]=useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src ={logo} alt="" />
                <p>Shopper</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {SetMenu("shop")}}><Link style={{textDecoration: 'none'}}to ='/'>Shop</Link>{menu=="shop"? <hr></hr>:<></>}</li>
                <li onClick={() => {SetMenu("men")}}><Link style={{textDecoration: 'none'}}to ='/men'>Men</Link>{menu=="men"? <hr></hr>:<></>}</li>
                <li onClick={() => {SetMenu("women")}}><Link style={{textDecoration: 'none'}} to ='/women'>Women</Link>{menu=="women"? <hr></hr>:<></>}</li>
                <li onClick={() => {SetMenu("kids")}}><Link style={{textDecoration: 'none'}} to ='/kids'>Kids</Link>{menu=="kids"? <hr></hr>:<></>}</li>
                <div className="nav-login-cart">
                    <Link to ='/login'><button>Login</button></Link>
                    <Link to ='/cart'><img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">
                        {getTotalCartItems()}
                    </div>
                </div>
            </ul>

        </div>
    )
}

export default Navbar
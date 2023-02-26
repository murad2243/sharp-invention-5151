import React from "react"
import {Link} from 'react-router-dom';
import trendtribers from "../imgs/trendtribers.png"
import styles from "../styles/Navbar.module.css";


function Navbar(){
    
    return (
        <div>
<div className={styles.NavOptions}>
        
        
        <img src={trendtribers} style={{height:"50px"}} />
        <p><Link to="/" >MENS</Link>
            </p>
            <p><Link to="/" >WOMEN</Link>
            </p>
       
        
        <p><Link to="/products" >PRODUCTS</Link></p>
        
       <div style={{width:"60px"}}></div>
        
        <input placeholder="Search by product" style={{width:"25%",background:"#eaeaea", padding:"5px", margin:"5px", borderRadius:"5px"}} type="text" />
        <p><Link to="/login" >
            <img style={{height:"30px"}} src="https://cdn-icons-png.flaticon.com/512/456/456212.png" alt="" />
            </Link></p>
            <img style={{height:"40px", margin:"5px"}} src="https://images.bewakoof.com/web/india-flag-round-1639566913.png" alt="" />
        
       
        

    
        </div>

        <div className={styles.secNav}>
            <p>MEN</p>
            <p>WOMEN</p>
            <p>ACCESORIES</p>
        </div>
        </div>
    
    )
        
}
export default Navbar;
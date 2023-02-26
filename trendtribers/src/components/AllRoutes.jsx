import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home" 
import LoginPage from "../Pages/LoginPage" 
import About from "../Pages/About" 
import Product from "../Pages/Product" 
import Register from "../Pages/Register" 
import SingleProduct from "../Pages/SingleProduct" 
import NotFound from "../Pages/NotFound" 




const AllRoutes=()=>{
    return <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/login" element={<LoginPage/>} ></Route>
        <Route path="/register" element={<Register/>} ></Route>
        <Route path="/notfound" element={<NotFound/>} ></Route>
        <Route path="/products" element={<Product/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/products/:id" element={<SingleProduct/>} ></Route>
    </Routes>
}
export default AllRoutes;
import React, { useReducer } from "react"
import axios from "axios"
import {useState, useEffect} from "react"
import { Center, Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
// import Footer from "../components/Footer";

import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'
import styled from "@emotion/styled"
import styles from "../styles/Products.module.css"
import { Grid, GridItem } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import Footer from "../components/Footer"
const intastate={
    products:[],
    isLoading: false,
    isError:false
}

const reducer = (state, action)=>{
    switch(action.type){
        case "FETCH_REQUEST":
        return {
            ...state,
            isLoading:true,
            isError:false
        }
        case "FETCH_SUCESS":
        return {
            ...state,
            products: action.payload,
            isLoading:false,
            isError:false
        }
        case "FETCH_FAILURE":
        return {
            ...state,
            products:[],
            isLoading:false,
            isError: true
        }
        default: 
        throw new Error()
    }
}

function Product(){
let [data, setData] = useState([])

const [state, dispatch] = useReducer(reducer, intastate);
const {products, isLoading, isError} = state;
const getData =  ()=>{
    dispatch({type:"FETCH_REQUEST"})
    axios.get("http://localhost:3001/mensData").then((res)=>{
        dispatch({type: "FETCH_SUCESS", payload: res.data})
        // console.log(res.data);
    }).catch((err)=>{
        dispatch({type: "FETCH_FAILURE", payload: err.massage})
        // console.log(err);
    });
}
useEffect(()=>{
    getData()

},[])

console.log(products)
    if(isError){
        return (
            <Alert height={"100px"} textAlign={"Center"} status='error'>
  <AlertIcon />
  <AlertTitle>SOMETHING WENT WRONG</AlertTitle>
  <AlertDescription>server is not responding</AlertDescription>
</Alert>
        )
    }
    if(isLoading){
        return (
            <Stack>
  <Skeleton height='100px' />
  <Skeleton height='100px' />
  <Skeleton height='100px' />
  <Skeleton height='100px' />
  <Skeleton height='100px' />
  <Skeleton height='100px' />
  <Skeleton height='100px' />
  <Skeleton height='100px' />
  <Skeleton height='100px' />
  <Skeleton height='100px' />
  <Skeleton height='100px' />
  <Skeleton height='100px' />
  <Skeleton height='100px' />
  <Skeleton height='100px' />
  <Skeleton height='100px' />
</Stack>
        )
    }
    return (
       <div>
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {
            products.map((el)=>(
                <GridItem key={el.id} className={styles.item}> 
                <img src={el.image_url} alt="" />
                    <b>  {el.brand} </b>
                    <p>{el.brand_description}</p>
                    <b> Rs. {el.price}  </b>
                    <p> Rating {el.ratings} <StarIcon  style={{marginTop:"-5px"}}/>  </p>
                    <button className={styles.cartBtn}>Add To Cart</button>
                </GridItem> 

            ))
        }
                
            

      
      </Grid>
        {/* <Footer/> */}
       </div>
        

      
    )
}
export default Product;